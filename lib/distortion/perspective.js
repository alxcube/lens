import LeastSquares from '../util/gauss-jordan-elimination/least-squares';
import createsBestFitViewportFromApexes from '../mixins/creates-bestFit-viewport-from-apexes';
import InvalidArgumentsLength from '../exception/invalid-arguments-length';
import {perceptibleReciprocal, isCollinear} from "../util/util";

/**
 * Project coordinates using projection matrix
 *
 * @private
 * @param {number} x
 * @param {number} y
 * @param {number[]} matrix Perspective matrix.
 * @returns {Point} Mapped coords pair.
 * @tutorial 03.02.perspective
 */
function map(x, y, matrix) {
  let p = matrix[0] * x + matrix[1] * y + matrix[2],
    q = matrix[3] * x + matrix[4] * y + matrix[5],
    r = matrix[6] * x + matrix[7] * y + 1;

  return [p / r, q / r];
}

/**
 * @summary Perspective Distortion (a ratio of affine distortions).
 *
 * @description <pre>
 *
 *     p(x,y)    c0*x + c1*y + c2
 * u = ------ = ------------------
 *     r(x,y)    c6*x + c7*y + 1
 *
 *     q(x,y)    c3*x + c4*y + c5
 * v = ------ = ------------------
 *      r(x,y)    c6*x + c7*y + 1
 *
 * denominator = Sign of 'r', or the denominator affine, for the actual image.
 * This determines what part of the distorted image is 'ground'
 * side of the horizon, the other part is 'sky' or invalid.
 * Valid values are  +1.0  or  -1.0  only.
 * </pre>
 *
 * @implements {DistortionInterface}
 * @memberOf lens.distortion
 * @mixes lens.mixins.createsBestFitViewportFromApexes
 * @see {@link https://www.imagemagick.org/Usage/distorts/#perspective Perspective distortion details at ImageMagick docs}
 * @see {@link https://imagemagick.org/api/MagickCore/distort_8c_source.html#l02450 Perspective distortion at ImageMagick source}
 */
class Perspective {

  /**
   *
   * @param {number[]} reverseMatrix Perspective projection matrix for reverse pixel mapping.
   * @param {number} denominator Denominator for mapping validity calculation.
   */
  constructor(reverseMatrix, denominator) {
    this.matrix = reverseMatrix;
    this.denominator = denominator;
    this.forwardMatrix = this.constructor.invertPerspectiveMatrix(reverseMatrix);
    this.hasPartialDerivatives = true;
    this.hasConstantPartialDerivatives = false;
    this.hasBestFitViewport = true;
  }

  /**
   * Creates perspective distortion using control points array.
   *
   * @param {number[]} controlPoints Mappings of control points [u0, v0, x0, y0, ... , un, vn, xn, yn] where
   * (u*, v*) are source (x, y) point and (x*, y*) are destination (x, y) point.
   * @returns {lens.distortion.Perspective} New instance.
   * @see {@link https://imagemagick.org/api/MagickCore/distort_8c_source.html#l00745 Generating perspective distortion matrix from control points at ImageMagick source}
   */
  static fromControlPoints(controlPoints) {
    if (controlPoints.length < 16 || controlPoints.length % 4 != 0) {
      throw new InvalidArgumentsLength(`Number of arguments must be multiple of 4 and at least 16 arguments (4 control points) expected. ${controlPoints.length} arguments given.`);
    }

    const leastSquares = new LeastSquares(8, 1);

    for (let i = 0; i < controlPoints.length; i += 4) {
      let [u, v, x, y] = controlPoints.slice(i, i + 4);

      leastSquares.addTerms([
        x, y, 1,
        0, 0, 0,
        -x * u, -y * u
      ], [u])
        .addTerms([
          0, 0, 0,
          x, y, 1,
          -x * v, -y * v
        ], [v]);
    }

    const matrix = leastSquares.solve().getVectors()[0];

    /*
     * Calculate denominator! The ground-sky determination.
     * What is sign of the 'ground' in r() denominator affine function?
     * Just use any valid image coordinate (first control point) in
     * destination for determination of what part of view is 'ground'.
     */
    const denominator = matrix[6] * controlPoints[2] + matrix[7] * controlPoints[3] + 1 < 0 ? -1 : 1;

    return new Perspective(matrix, denominator);
  }

  /**
   * Creates perspective distortion using perspective matrix.
   *
   * @param {number[]} matrix Perspective matrix.
   * @returns {lens.distortion.Perspective}
   * @see {@link https://imagemagick.org/api/MagickCore/distort_8c_source.html#l00853 Generating inverted perspective distortion matrix from forward perspective matrix at ImageMagick docs}
   */
  static fromForwardMatrix(matrix) {
    // TODO: trap test  c0*c4-c3*c1 == 0  (determinant = 0, no inverse)
    const inverse = this.invertPerspectiveMatrix(matrix);

    /*
     * Calculate denominator! The ground-sky determination.
     * What is sign of the 'ground' in r() denominator affine function?
     * Just use any valid image coordinate in destination for determination.
     * For a forward mapped perspective the images 0,0 coord will map to
     * c2,c5 in the distorted image, so set the sign of denominator of that.
     */
    const denominator = inverse[6] * matrix[2] + inverse[7] * matrix[5] + 1 < 0 ? -1 : 1;
    return new Perspective(inverse, denominator);
  }

  /**
   * Creates inverted perspective matrix from perspective matrix.
   *
   * @param {number[]} matrix Perspective matrix.
   * @returns {number[]} Inverted perspective matrix.
   * @see {@link https://imagemagick.org/api/MagickCore/distort_8c_source.html#l00109 Inverting perspective matrix at ImageMagick source}
   */
  static invertPerspectiveMatrix(matrix) {
    const determinant = perceptibleReciprocal(matrix[0] * matrix[4] - matrix[3] * matrix[1]);

    return [
      determinant * (matrix[4] - matrix[7] * matrix[5]),
      determinant * (matrix[7] * matrix[2] - matrix[1]),
      determinant * (matrix[1] * matrix[5] - matrix[4] * matrix[2]),
      determinant * (matrix[6] * matrix[5] - matrix[3]),
      determinant * (matrix[0] - matrix[6] * matrix[2]),
      determinant * (matrix[3] * matrix[2] - matrix[0] * matrix[5]),
      determinant * (matrix[3] * matrix[7] - matrix[6] * matrix[4]),
      determinant * (matrix[6] * matrix[1] - matrix[0] * matrix[7])
    ];
  }

  /**
   * @inheritDoc
   */
  reverseMap(x, y) {
    return map(x, y, this.matrix);
  }

  /**
   * @inheritDoc
   */
  getValidity(x, y, scaling) {
    const r = this.matrix[6] * x + this.matrix[7] * y + 1;
    let validity = r * this.denominator < 0 ? 0 : 1;
    const absR = Math.abs(r) * 2;
    const absC6 = Math.abs(this.matrix[6]);
    const absC7 = Math.abs(this.matrix[7]);

    if (absC6 > absC7) {
      if (absR < absC6) {
        validity = 0.5 - this.denominator * r / (this.matrix[6] * scaling);
      }
    } else if (absR < absC7) {
      validity = 0.5 - this.denominator * r / (this.matrix[7] * scaling);
    }

    return validity;
  }

  /**
   * @inheritDoc
   */
  getPartialDerivatives(x, y) {
    const p = this.matrix[0] * x + this.matrix[1] * y + this.matrix[2],
      q = this.matrix[3] * x + this.matrix[4] * y + this.matrix[5],
      r = this.matrix[6] * x + this.matrix[7] * y + 1,
      scale = Math.pow(1 / r, 2);

    return [
      (r * this.matrix[0] - p * this.matrix[6]) * scale, // dUx
      (r * this.matrix[1] - p * this.matrix[7]) * scale, // dUy
      (r * this.matrix[3] - q * this.matrix[6]) * scale, // dVx
      (r * this.matrix[4] - q * this.matrix[7]) * scale //dVy
    ];
  }

  /**
   * Maps source coords into destination coords.
   *
   * @param {number} u X-coordinate of source image point.
   * @param {number} v Y-coordinate of source image point.
   * @returns {Point} Forward mapped destination image coords.
   */
  forwardMap(u, v) {
    return map(u, v, this.forwardMatrix);
  }
}

Object.assign(Perspective.prototype, createsBestFitViewportFromApexes);

export default Perspective;