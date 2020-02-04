import Affine from './distortion/affine';
import Arc from './distortion/arc';
import Perspective from './distortion/perspective';

/**
 * @summary Resolves distortion class instance using distortion arguments and optionally image.
 *
 * @callback lens~DistortionResolver
 * @param {number[]} args
 * @param {ImageInterface} [image]
 * @returns {DistortionInterface}
 */

/**
 * Make Affine distortion using control points.
 *
 * @private
 * @param {number[]} args
 * @returns {lens.distortion.Affine}
 */
function affineByControlPoints(args) {
  return Affine.fromControlPoints(args);
}

/**
 * Make Affine distortion using affine matrix. Arguments order is as described for compatibility with ImageMagick
 * arguments.
 *
 * @private
 * @param sx
 * @param ry
 * @param rx
 * @param sy
 * @param tx
 * @param ty
 * @returns {lens.distortion.Affine}
 */
function affineByMatrix ([sx, ry, rx, sy, tx, ty]) {
  // Change arguments order.
  return Affine.fromForwardMatrix([sx, rx, tx, ry, sy, ty]);
}

/**
 * Make perspective distortion using control points.
 * If number of control point sets is less than 4 (< 16 arguments), this will fallback to Affine distortion.
 *
 * @private
 * @param {number[]} args
 * @returns {lens.distortion.Perspective|lens.distortion.Affine}
 */
function perspectiveByControlPoints(args) {
  if (args.length < 16) {
    console.warn('Perspective distortion requires at least 4 controls points mapping (u, v) -> (x, y). Affine distortion will be used.');
    return Affine.fromControlPoints(args);
  }

  return Perspective.fromControlPoints(args);
}

/**
 * @private
 * @param {number[]} args
 * @returns {lens.distortion.Perspective}
 */
function perspectiveByMatrix(args) {
  return Perspective.fromForwardMatrix(args);
}

/**
 * @private
 * @param {number[]} args
 * @param {ImageInterface} image
 * @returns {lens.distortion.Arc}
 */
function arcByArguments(args, image) {
  return Arc.fromArguments(image.viewport, args);
}

/**
 * Distortion types.
 *
 * @enum {lens~distortionResolver}
 * @memberOf lens
 */
const distorts = {
  /**
   * Affine distortion using control points. Arguments are sets of control points mappings:
   * [u0, v0, x0, y0, ..., uN, vN, xN, yN], where u*, v* are source image coords, x*, y* are
   * destination image coords.
   */
  AFFINE: affineByControlPoints,
  /**
   * Affine distortion using forward affine matrix.
   * Arguments are affine matrix coefficients: [sx, ry, rx, sy, tx, ty]
   */
  AFFINE_PROJECTION: affineByMatrix,
  /**
   * Perspective distortion using control points. Arguments are sets of control points mappings:
   * [u0, v0, x0, y0, ..., uN, vN, xN, yN], where u*, v* are source image coords, x*, y* are
   * destination image coords.
   * If number of control point sets is less than 4 (< 16 arguments), this will fallback to Affine distortion
   * with warning message in console.
   */
  PERSPECTIVE: perspectiveByControlPoints,
  /**
   * Perspective distortion using forward perspective matrix. Arguments are perspective matrix coefficients:
   * [sx, ry, tx, rx, sy, ty, px, py].
   */
  PERSPECTIVE_PROJECTION: perspectiveByMatrix,

  /**
   * Arc distortion. Arguments are: [arcAngle, rotation, outerRadius, innerRadius]. All arguments except arcAngle
   * are optional. See {@link lens.distortion.Arc.fromArguments}
   */
  ARC: arcByArguments
};

/**
 * Register custom distortion resolver.
 *
 * @memberOf lens
 * @param {string} name
 * @param {lens~distortionResolver} resolver
 */
function registerDistortionResolver(name, resolver) {
  distorts[name]  = resolver;
}

/**
 * Unregister distortion resolver.
 *
 * @memberOf lens
 * @param {string} name
 */
function unregisterDistortionResolver(name) {
  delete distorts[name];
}

export {registerDistortionResolver, unregisterDistortionResolver};

export default distorts;