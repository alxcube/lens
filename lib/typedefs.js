/**
 * @summary Distortion options object specification.
 *
 *
 * @typedef DistortionOptions
 *
 * @property {boolean} [async=true] Perform distortion asynchronously.
 *
 * @property {boolean} [bestFit=false] Calculate new 'best fit' viewport for distortion result. Calculated viewport
 * will contain whole distorted image without 'paddings'. If chosen distortion can't calculate best fit viewport --
 * this option will be ignored.
 *
 * @property {boolean} [resample=true] <p>If set to true (default), {@link lens.resampler.EWA Elliptical Weighted Average}
 * resampler will be used.</p>
 * <p>If set to false, {@link lens.resampler.Point} will be used.</p>
 * <p>While resampling produces
 * more smooth result with anti-aliasing, it may be very time-consuming (up to few hours for large images using
 * some distortions with some other settings). On the other hand, turned-off resampling produces aliasing artifacts
 * but works very fast and may be good choice to generate distortion previews.</p>
 * <p>At last, some distortions may not support resampling at all (but they are not implemented at the moment 😀).</p>
 * <p>And at very last, if you set `resampler` option, `resampling` option will be ignored.</p>
 *
 * @property {ResamplerInterface} [resampler] Provide your own resampler. If you know what you are doing.
 *
 * @property {lens.filterPresets|lens~filterFactory|FilterInterface} [filterPreset=lens.filterPresets.ROBIDOUX] Filter for
 * {@link lens.resampler.EWA EWA} resampler.
 *
 * @property {Color} [matteColor] Matte color setting for resampler. If omitted, resampler's default matte color
 * will be used.
 *
 * @property {lens.Viewport} [viewport] User defined virtual viewport of output distorted image.
 *
 * @property {number} [outputScaling=1] Scaling factor for distorted image for supersampling.
 *
 * @property {number} [supersample] This property overrides `outputScaling` option and is used for the same purpose.
 * The difference is that with this option image is returned already resized. If you want to resize it manually,
 * possibly with some third party library, use `outputScaling` instead.
 */

/**
 * @summary Color type.
 *
 * @description Array of 4 elements representing color channel values:
 * 0: red;
 * 1: green;
 * 2: blue;
 * 3: alpha.
 * Each channel value must be in range [0; {@link ImageInterface}#quantumRange].
 * Alpha channel must be 0 for completely transparent color and {@link ImageInterface}#quantumRange (255 for 8 bit
 * per channel images) for 100% opaque color.
 *
 * @typedef {number[]} Color
 */

/**
 * @summary Pair of x and y coordinates.
 *
 * @typedef {number[]} Point
 */