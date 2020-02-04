import {EPSILON} from "../constants";

/**
 * Return 1/x where x is perceptible (not unlimited or infinitesimal).
 *
 * @memberOf lens.util
 * @param {number} x
 * @returns {number}
 * @see {@link https://imagemagick.org/api/MagickCore/pixel-accessor_8h_source.html#l00234 PerceptibleReciprocal()}
 * at ImageMagick source.
 */
function perceptibleReciprocal(x) {
  const sign = x < 0 ? -1 : 1;

  if (sign * x >= EPSILON) {
    return 1 / x;
  }

  return sign / EPSILON;
}

/**
 * Blends two colors by given weights.
 *
 * @memberOf lens.util
 * @param {Color} color1 First color to blend.
 * @param {number} weight1 First color's weight.
 * @param {Color} color2 Second color to blend.
 * @param {number|null} [weight2] Second color's weight. If not passed -- will be calculated as 1 - weight1.
 * @returns {Color} Color blending result.
 */
function blendColors(color1, weight1, color2, weight2 = null) {
  if (weight2 === null) {
    weight2 = 1 - weight1;
  }

  return color1.map((channel, i) => Math.round(channel * weight1 + color2[i] * weight2));
}

/**
 * Converts radians to degrees
 *
 * @memberOf lens.util
 * @param {number} radians
 * @returns {number}
 */
function rad2deg(radians) {
  return 180 * radians / Math.PI;
}

/**
 * Converts degrees to radians
 *
 * @memberOf lens.util
 * @param {number} degrees
 * @returns {number}
 */
function deg2rad(degrees) {
  return Math.PI * degrees / 180;
}

export {
  blendColors,
  perceptibleReciprocal,
  rad2deg,
  deg2rad
};