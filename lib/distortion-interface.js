/**
 * Interface that makes possible to distort images independent of image processing tool.
 *
 * @interface DistortionInterface
 *
 * @tutotial 02.01.image-interface
 * @tutorial 02.02.reverse-pixel-mapping
 * @tutorial 03.00.distortions
 */

/**
 * Shows if distortion has partial derivatives. Only distortions with partial
 * derivatives can be performed using Elliptical Weighted Average resampler.
 *
 * @name DistortionInterface#hasPartialDerivatives
 * @type {boolean}
 */

/**
 * Shows if distortion has constant partial derivatives, so there is
 * no need to recalculate EWA ellipse for each point.
 *
 * @name DistortionInterface#hasConstantPartialDerivatives
 * @type {boolean}
 */

/**
 * Shows if distortion can generate best fit viewport.
 *
 * @name DistortionInterface#hasBestFitViewport
 * @type {boolean}
 */

/**
 * Shows if distortion forces best fit for its performing.
 * This property is optional.
 *
 * @name DistortionInterface#forceBestFit
 * @type {boolean}
 */

/**
 * Maps destination coordinates into source coordinates
 *
 * @function
 * @name DistortionInterface#reverseMap
 * @param {number} x
 * @param {number} y
 * @returns {Point} Source coordinates pair
 */

/**
 * Returns number that represents how mathematically valid is mapping. If validity is < 0 -- the mapping is invalid
 *
 * @function
 * @name DistortionInterface#getValidity
 * @param {number} x
 * @param {number} y
 * @param {number} scaling
 * @returns {number}
 */

/**
 * Returns partial derivatives for given (x, y) for scaling ellipse in EWA.
 *
 * @function
 * @name DistortionInterface#getPartialDerivatives
 * @param {number} x
 * @param {number} y
 * @returns {number[]} Four partial derivatives: dux, duy, dvx, dvy
 */

/**
 * Returns calculated best fit viewport for given undistorted image viewport.
 *
 * @function
 * @name DistortionInterface#getBestFitViewport
 * @param {lens.Viewport} image
 * @returns {lens.Viewport}
 */