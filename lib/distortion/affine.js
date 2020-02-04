import LeastSquares from "../util/gauss-jordan-elimination/least-squares";
import createsBestFitViewportFromApexes from '../mixins/creates-bestFit-viewport-from-apexes';
import InvalidArgumentsLength from '../exception/invalid-arguments-length';
import {perceptibleReciprocal} from "../util/util";

/**
 * Project coordinates using projection matrix.
 *
 * @private
 * @param {number} x
 * @param {number} y
 * @param {number[]} matrix Affine matrix.
 * @returns {Point} Mapped coords pair.
 */
function map(x, y, matrix) {
  return [
    matrix[0] * x + matrix[1] * y + matrix[2],
    matrix[3] * x + matrix[4] * y + matrix[5]
  ];
}

/**
 * Affine distortion.
 *
 * @implements {DistortionInterface}
 * @memberOf lens.distortion
 * @mixes lens.mixins.createsBestFitViewportFromApexes
 * @see {@link https://www.imagemagick.org/Usage/distorts/#affine Affine distortion details at ImageMagick docs}
 * @see {@link https://imagemagick.org/api/MagickCore/distort_8c_source.html#l02443 Affine distortion at ImageMagick source}
 * @tutorial 03.01.affine
 */
class Affine {
  /**
   *
   * @param {number[]} matrix Affine matrix.
   */
  constructor(matrix) {
    this.matrix = matrix;
    this.forwardMatrix = this.constructor.invertAffineMatrix(matrix);
    this.hasPartialDerivatives = true;
    this.hasConstantPartialDerivatives = true;
    this.hasBestFitViewport = true;
  }

  /**
   * Creates affine distortion using control points array.
   *
   * @param {number[]} controlPoints Mappings of control points [u0, v0, x0, y0, ... , un, vn, xn, yn] where
   * (u*, v*) are source (x, y) point and (x*, y*) are destination (x, y) point
   * @returns {lens.distortion.Affine}
   * @see {@link https://imagemagick.org/api/MagickCore/distort_8c_source.html#l00501 Generating affine distortion matrix from control points at ImageMagick source}
   */
  static fromControlPoints(controlPoints) {
    if (controlPoints.length % 4 != 0) {
      throw new InvalidArgumentsLength(`Number of arguments must be multiple of 4 and at least 4 arguments (1 control point) expected. ${controlPoints.length} arguments given.`);
    }

    /*
     * handle special cases of not enough arguments
     */
    if (controlPoints.length === 4) {
      // Only 1 CP Set Given
      return new Affine([
        1, 0, controlPoints[0] - controlPoints[2],
        0, 1, controlPoints[1] - controlPoints[3]
      ]);
    } else {
      // 2 or more points (usally 3) given.
      // Solve a least squares simultaneous equation for coefficients.
      const leastSquares = new LeastSquares(3, 2);

      for (let i = 0; i < controlPoints.length; i += 4) {
        let [u, v, x, y] = controlPoints.slice(i, i + 4);

        leastSquares.addTerms([
          x, y, 1
        ], [u, v]);
      }

      if (controlPoints.length === 8) {
        /*
         * Only two pairs were given, but we need 3 to solve the affine.
         * Fake extra coordinates by rotating p1 around p0 by 90 degrees.
         * x2 = x0 - (y1-y0)   y2 = y0 + (x1-x0)
         */
        leastSquares.addTerms(
          [
            controlPoints[2] - (controlPoints[7] - controlPoints[3]),
            controlPoints[3] + (controlPoints[6] - controlPoints[2]),
            1
          ],
          [
            controlPoints[0] - controlPoints[5] + controlPoints[1],
            controlPoints[1] + controlPoints[4] - controlPoints[0]
          ]
        );
      }

      const vectors = leastSquares.solve().getVectors();

      return new Affine(vectors[0].concat(vectors[1]));
    }
  }

  /**
   * Creates affine distortion using affine matrix.
   *
   * @param {number[]} matrix Affine projection coefficients: [sx, rx, tx, ry, sy, ty]
   * @returns {lens.distortion.Affine}
   * @see {@link https://imagemagick.org/api/MagickCore/distort_8c_source.html#l00609 Generating inverted affine distortion matrix from forward affine matrix at ImageMagick source}
   */
  static fromForwardMatrix(matrix) {
    // TODO: trap test for sx*sy-rx*ry == 0 (determinant = 0, no inverse)

    return new Affine(this.invertAffineMatrix(matrix));
  }

  /**
   * Creates inverted affine matrix from affine matrix.
   *
   * @param {number[]} matrix Affine matrix.
   * @returns {number[]} Inverted affine matrix.
   * @see {@link https://imagemagick.org/api/MagickCore/distort_8c_source.html#l00095 Inverting affine matrix at ImageMagick source}
   */
  static invertAffineMatrix(matrix) {
    /* From "Digital Image Warping" by George Wolberg, page 50 */

    const determinant = perceptibleReciprocal(matrix[0] * matrix[4] - matrix[1] * matrix[3]);

    return [
      determinant * matrix[4],
      determinant * (-matrix[1]),
      determinant * (matrix[1] * matrix[5] - matrix[2] * matrix[4]),
      determinant * (-matrix[3]),
      determinant * matrix[0],
      determinant * (matrix[2] * matrix[3] - matrix[0] * matrix[5])
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
  getValidity(x, y) {
    return 1;
  }

  /**
   * @inheritDoc
   */
  getPartialDerivatives(x, y) {
    return [
      this.matrix[0],
      this.matrix[1],
      this.matrix[3],
      this.matrix[4]
    ];
  }

  /**
   * Maps source coords into destination coords.
   *
   * @param {number} x X-coordinate of source image point.
   * @param {number} y Y-coordinate of source image point.
   * @returns {Point} Forward mapped destination image coords.
   */
  forwardMap(x, y) {
    return map(x, y, this.forwardMatrix);
  }
}

Object.assign(Affine.prototype, createsBestFitViewportFromApexes);

export default Affine;