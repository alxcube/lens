import * as distorter from "./distorter";
import * as resampler from "./resampler";
import filterPresets from './filter-presets';

let defaultOptions = {
  bestFit: false,
  filter: filterPresets.ROBIDOUX,
  resample: true,
  async: true,
  outputScaling: 1
};

/**
 * Performs distortion of image
 *
 * @memberOf lens
 * @param {ImageInterface} image
 * @param {lens.distorts|lens~distortionResolver|DistortionInterface} distortion
 * @param {array} args
 * @param {DistortionOptions} [options]
 * @returns {ImageInterface|Promise<ImageInterface>}
 */
function distort(image, distortion, args, options = {}) {
  if (typeof distortion == 'function') {
    distortion  = distortion(args, image);
  } else {
    options     = args || {};
  }

  options = makeOptions(options);

  if (distortion.forceBestFit) {
    options.bestFit = true;
  }

  let distorted = sync(
    makeDistorter(
      image,
      distortion,
      makeResampler(image, distortion, options),
      options
    ).distort()
  );

  if (options.supersample && options.supersample != 1) {
    return scaleSupersampled(distorted, 1 / options.supersample);
  }

  return distorted;
}

/**
 * Sync ImageInterface internal data storage with image object.
 *
 * @private
 * @param {ImageInterface|Promise<ImageInterface>} distorted
 * @returns {ImageInterface|Promise<ImageInterface>}
 */
function sync(distorted) {
  if (distorted instanceof Promise) {
    return distorted.then(distorted => sync(distorted));
  }

  if ('sync' in distorted && typeof distorted.sync == 'function') {
    return distorted.sync();
  }

  return distorted;
}

/**
 * Scales supersampled image back to normal size.
 *
 * @private
 * @param {ImageInterface|Promise<ImageInterface>} supersampled
 * @param {number} scale
 * @returns {ImageInterface|Promise<ImageInterface>}
 */
function scaleSupersampled(supersampled, scale) {
  if (supersampled instanceof Promise) {
    return supersampled.then(supersampled => scaleSupersampled(supersampled, scale));
  }

  if ('scale' in supersampled && typeof supersampled.scale == 'function') {
    return supersampled.scale(scale);
  } else {
    console.warn(`Method 'scale()' not found in image object. No scaling performed.`);
  }

  return supersampled;
}

/**
 * Makes valid options for distortion
 *
 * @private
 * @param {DistortionOptions} options
 * @returns {DistortionOptions}
 */
function makeOptions(options) {
  options = Object.assign({}, defaultOptions, options);

  if (options.supersample) {
    options.outputScaling = options.supersample;
  }

  return options;
}

/**
 * Makes image distorter
 *
 * @private
 * @param {ImageInterface} image
 * @param {DistortionInterface} distortion
 * @param {ResamplerInterface} resampler
 * @param {DistortionOptions} options
 * @returns {ReversePixelMapping}
 */
function makeDistorter(image, distortion, resampler, options) {
  const dist = new distorter.ReversePixelMapping(image, distortion, resampler);
  dist.async = !!options.async;
  dist.bestFit = !!options.bestFit;

  if (options.viewport) {
    dist.viewport = options.viewport;
  }

  if (options.outputScaling) {
    dist.outputScaling = options.outputScaling;

    if (options.supersample) {
      dist.supersample = true;
    }
  }

  return dist;
}

/**
 * Makes resampler
 *
 * @private
 * @param {ImageInterface} image
 * @param {DistortionInterface} distortion
 * @param {DistortionOptions} options
 * @returns {ResamplerInterface}
 */
function makeResampler(image, distortion, options) {
  let rsm;

  if (options.resampler) {
    rsm = options.resampler;
  } else if (options.resample) {
    rsm = new resampler.EWA(makeFilter(options));
  } else {
    rsm = new resampler.Point();
  }

  if (options.matteColor) {
    rsm.matteColor = options.matteColor.slice();
  }

  return rsm;
}

/**
 * Makes filter
 *
 * @private
 * @param {DistortionOptions} options
 * @returns {FilterInterface}
 */
function makeFilter(options) {
  if (typeof options.filter == 'function') {
    return options.filter();
  }

  return options.filter;
}

export default distort;