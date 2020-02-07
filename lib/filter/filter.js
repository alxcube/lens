import {EPSILON} from "../constants";

/**
 * Internal filter or windowing function.
 *
 * @callback lens.filter.Filter~filterFunction
 * @param {number} [x]
 * @param {number} [support]
 * @param {number} [windowSupport]
 * @returns {number}
 */

/**
 * Resample filter.
 *
 * @implements {FilterInterface}
 * @memberOf lens.filter
 * @see {@link https://www.imagemagick.org/Usage/filter/#filter Resampling Filters} at ImageMagick docs
 * @see {@link https://www2.eecs.berkeley.edu/Pubs/TechRpts/1989/CSD-89-516.pdf Fundamentals of Texture Mapping and Image Warping by Paul S. Heckbert}
 * page 41, section 3.4, 3.5
 * @see {@link https://imagemagick.org/api/MagickCore/resize_8c_source.html#l00757 AquireResizeFilter at ImageMagick source}
 * @tutorial 02.03.pixel-color-lookup
 */
class Filter {

  /**
   *
   * @param {lens.filter.Filter~filterFunction} filterFunction Filtering function.
   * @param {lens.filter.Filter~filterFunction} windowFunction Windowing function.
   * @param {number} support Filter region of support - the filter support limit.
   * @param {number} scale Dimension scaling to fit window support (usally 1.0).
   * @param {number} [blur=1] X-scale (blur-sharpen).
   * @param {number|null} [windowSupport=null] Window support, usually equal to support (expert only).
   */
  constructor(filterFunction, windowFunction, support, scale, blur = 1, windowSupport = null) {
    this.filterFunction = filterFunction;
    this.windowFunction = windowFunction;
    this.support = support;
    this.scale = scale;
    this.blur = blur;
    this.windowSupport = windowSupport !== null ? windowSupport : support;
  }

  /**
   * @inheritDoc
   */
  getWeight(x) {
    const xBlur = x / this.blur;
    const scale = xBlur < EPSILON ? 1 : this.window(this.scale * xBlur);
    return scale * this.filter(xBlur);
  }

  /**
   * @inheritDoc
   */
  filter(x) {
    return this.filterFunction(x, this.support, this.windowSupport);
  }

  /**
   * @inheritDoc
   */
  window(x) {
    return this.windowFunction(x, this.support, this.windowSupport);
  }
}

export default Filter;