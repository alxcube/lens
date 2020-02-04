/**
 * @namespace lens.filter.filterFunctions
 */

/**
 * Makes box filter function.
 * A Box filter is a equal weighting function (all weights equal).
 * DO NOT LIMIT results by support or resize point sampling will work
 * as it requests points beyond its normal 0.0 support size.
 *
 * @memberOf lens.filter.filterFuncFactories
 * @returns {lens.filter.Filter~filterFunction}
 * @see {@link https://imagemagick.org/api/MagickCore/resize_8c_source.html#l00181 Ox filter function at ImageMagick source}
 */
function box() {
  return function () {
    return 1;
  };
}

/**
 * Makes cubicBC filter function.
 * <p>Cubic Filters using B,C determined values:</p>
 * <pre>
 *     Mitchell-Netravali  B = 1/3 C = 1/3  "Balanced" cubic spline filter
 *     Catmull-Rom         B = 0   C = 1/2  Interpolatory and exact on linears
 *     Spline              B = 1   C = 0    B-Spline Gaussian approximation
 *     Hermite             B = 0   C = 0    B-Spline interpolator
 * </pre>
 *
 * <p>See paper by Mitchell and Netravali, Reconstruction Filters in Computer
 * Graphics Computer Graphics, Volume 22, Number 4, August 1988
 * {@link http://www.cs.utexas.edu/users/fussell/courses/cs384g/lectures/mitchell/Mitchell.pdf}.</p>
 *
 * <p>Coefficents are determined from B,C values:
 * <pre>
 *    P0 = (  6 - 2*B       )/6 = coeff[0]
 *    P1 =         0
 *    P2 = (-18 +12*B + 6*C )/6 = coeff[1]
 *    P3 = ( 12 - 9*B - 6*C )/6 = coeff[2]
 *    Q0 = (      8*B +24*C )/6 = coeff[3]
 *    Q1 = (    -12*B -48*C )/6 = coeff[4]
 *    Q2 = (      6*B +30*C )/6 = coeff[5]
 *    Q3 = (    - 1*B - 6*C )/6 = coeff[6]
 * </pre>
 * which are used to define the filter:
 * <pre>
 *    P0 + P1*x + P2*x^2 + P3*x^3      0 <= x < 1
 *    Q0 + Q1*x + Q2*x^2 + Q3*x^3      1 <= x < 2
 * </pre>
 * which ensures function is continuous in value and derivative (slope).</p>
 *
 * @memberOf lens.filter.filterFuncFactories
 * @see {@link https://imagemagick.org/api/MagickCore/resize_8c_source.html#l00207 CubicBC filter function at ImageMagick source}
 * @param {number} b
 * @param {number} c
 * @returns {lens.filter.Filter~filterFunction}
 */
function cubicBC(b, c) {
  const p0 = (6 - 2 * b) / 6;
  const p1 = 0;
  const p2 = (-18 + 12 * b + 6 * c) / 6;
  const p3 = (12 - 9 * b - 6 * c) / 6;
  const q0 = (8 * b + 24 * c) / 6;
  const q1 = (-12 * b - 48 * c) / 6;
  const q2 = (6 * b + 30 * c) / 6;
  const q3 = (-1 * b - 6 * c) / 6;

  return function (x) {
    if (x < 1) {
      return p0 + x * (x * (p2 + x * p3));
    } else if (x < 2) {
      return q0 + x * (q1 + x * (q2 + x * q3));
    } else {
      return 0;
    }
  }
}

// TODO: add more filter functions

export {
  box, cubicBC
};