/**
 * @interface ResamplerInterface
 * @tutorial 02.03.pixel-color-lookup
 */

/**
 * Matte color for invalid mappings.
 *
 * @name ResamplerInterface#matteColor
 * @type {Color}
 */

/**
 * Scaling factor for supersampling.
 *
 * @name DistortionInterface#scaling
 * @type {number}
 */

/**
 * Sets source image.
 *
 * @function
 * @name ResamplerInterface#setImage
 * @param {ImageInterface} image
 * @returns {ResamplerInterface} Chainable
 */

/**
 * Sets distortion mapper.
 *
 * @function
 * @name ResamplerInterface#setMapper
 * @param {DistortionInterface} mapper
 * @returns {ResamplerInterface} Chainable
 */

/**
 * Returns resampled color for given destination image coordinates.
 *
 * @function
 * @name ResamplerInterface#getResampledColor
 * @param {number} x
 * @param {number} y
 * @returns {Color} Resampled color
 */