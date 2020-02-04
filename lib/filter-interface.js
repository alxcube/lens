/**
 * @interface FilterInterface
 * @see {@link https://www.imagemagick.org/Usage/filter/#filter Resampling Filters} at ImageMagick docs
 * @tutorial 02.04.resampling-and-filters
 */

/**
 * Filter region of support - the filter support limit.
 *
 * @name FilterInterface#support
 * @type {number}
 */

/**
 * Dimension scaling to fit window support (usally 1.0).
 *
 * @name FilterInterface#scale
 * @type {number}
 */

/**
 * X-scale (blur-sharpen).
 *
 * @name FilterInterface#blur
 * @type {number}
 */

/**
 * Window support, usually equal to support (expert only).
 *
 * @name FilterInterface#windowSupport
 * @type {number}
 */

/**
 * @function
 * @name FilterInterface#getWeight
 * @param {number} x
 * @returns {number}
 */

/**
 * @function
 * @name FilterInterface#filter
 * @param {number} x
 * @returns {number}
 */

/**
 * @function
 * @name FilterInterface#window
 * @param {number} x
 * @returns {number}
 */