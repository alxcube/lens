import {EPSILON, M_PI2, M_2PI} from "../constants";
import {InvalidArgument} from "../exception";
import {deg2rad} from "../util";
import Viewport from '../viewport';

/**
 * @summary Arc distortion.
 *
 * @description Note the coefficients use a center angle, so asymptotic join is
 * furthest from both sides of the source image. This also means that
 * for arc angles greater than 360 the sides of the image will be
 * trimmed equally.
 *
 * @memberOf lens.distortion
 * @implements DistortionInterface
 * @see {@link https://www.imagemagick.org/Usage/distorts/#arc Arc distortion details} at ImageMagick docs.
 * @see {@link https://imagemagick.org/api/MagickCore/distort_8c_source.html#l02561 Arc distortion} at ImageMagick
 * source.
 * @tutorial 03.03.arc
 */
class Arc {
  /**
   *
   * @param {lens.Viewport} viewport
   * @param {number} c0 Angle for center of source image.
   * @param {number} c1 Angle scale for mapping to source image.
   * @param {number} c2 Radius for top of source image.
   * @param {number} c3 Radius scale for mapping source image.
   * @param {number} c4 Center line of arc within source image.
   */
  constructor(viewport, c0, c1, c2, c3, c4) {
    this.viewport = viewport;
    this.c0 = c0;
    this.c1 = c1;
    this.c2 = c2;
    this.c3 = c3;
    this.c4 = c4;

    /*
     * Convert the angle_to_width and radius_to_height
     * to appropriate scaling factors, to allow faster processing
     * in the mapping function.
     */
    this.angleToWidth = M_2PI * this.viewport.width() / this.c1;
    this.radiusToHeight = this.viewport.height() / this.c3;

    this.hasPartialDerivatives = true;
    this.hasConstantPartialDerivatives = false;
    this.hasBestFitViewport = true;
    this.forceBestFit = true;
  }

  /**
   * @summary Creates arc distortion class from arguments.
   *
   * @description Arguments:  [angle, rotation, outer_radius, inner_radius]
   * All but first argument are optional.
   *
   * By default, if the radii arguments are nor provided the image radius
   * is calculated so the horizontal center-line is fits the given arc
   * without scaling.
   *
   * The output image size is ALWAYS adjusted to contain the whole image,
   * and an offset is given to position image relative to the 0,0 point of
   * the origin, allowing users to use relative positioning onto larger
   * background.
   *
   * The arguments are converted to distortion coefficients.
   *
   * @param {lens.Viewport} viewport
   * @param {number[]} args Arguments:
   * * 0: **angle** - The angle over which to arc the image side-to-side.
   * * 1: **rotation** - Angle to rotate image from vertical center.
   * * 2: **outer_radius** - Set top edge of source image at this radius.
   * * 3: **inner_radius** - Set bottom edge to this radius (radial scaling).
   * @returns {lens.distortion.Arc}
   * @throws {lens.exception.InvalidArgument} Thrown when first (angle) or third (outer radius) arguments are too small
   *
   * @see {@link https://imagemagick.org/api/MagickCore/distort_8c_source.html#l01095 Generating coefficients} for arc
   * distortion at ImageMagick source.
   */
  static fromArguments(viewport, args) {
    if (args.length >= 1 && args[0] < EPSILON) {
      throw new InvalidArgument('Angle too small');
    }

    if (args.length >= 3 && args[2] < EPSILON) {
      throw new InvalidArgument('Outer radius too small');
    }

    let c0, c1, c2, c3, c4;

    c0 = -M_PI2; // -90, place at top!

    if (args.length >= 1) {
      c1 = deg2rad(args[0]);
    } else {
      c1 = M_PI2; // zero arguments - center is at top
    }

    if (args.length >= 2) {
      c0 += deg2rad(args[1]);
    }

    c0 /= M_2PI; // normalize radians
    c0 -= Math.round(c0);
    c0 *= M_2PI; // de-normalize back to radians

    c3 = viewport.height() - 1;
    c2 = viewport.width() / c1 + c3 / 2;

    if (args.length >= 3) {
      if (args.length >= 4) {
        c3 = args[2] - args[3];
      } else {
        c3 *= args[2] / c2;
      }

      c2 = args[2];
    }

    c4 = (viewport.width() - 1) / 2;

    return new Arc(viewport, c0, c1, c2, c3, c4);
  }

  /**
   * @inheritDoc
   */
  reverseMap(x, y) {
    let [u, v] = this.getUV(x, y);

    // now scale the angle and radius for source image lookup point
    u = u * this.angleToWidth + this.c4 + this.viewport.x1 + 0.5;
    v = (this.c2 - v) * this.radiusToHeight + this.viewport.y1;

    //console.log(u, v, x, y);

    return [u, v];
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
    let [u, v] = this.getUV(x, y);

    /*
     * Arc Distortion Partial Scaling Vectors
     * Are derived by mapping the perpendicular unit vectors
     * dR  and  dA*R*2PI  rather than trying to map dx and dy
     * The results is a very simple orthogonal aligned ellipse.
     */
    if (v > EPSILON) {
      return [this.angleToWidth / (M_2PI * v), 0, 0, this.radiusToHeight];
    } else {
      return [this.viewport.width() * 2, 0, 0, this.radiusToHeight];
    }
  }

  /**
   * Returns calculated best fit viewport for image.
   *
   * @param {lens.Viewport} viewport
   * @returns {lens.Viewport}
   * @see {@link https://imagemagick.org/api/MagickCore/distort_8c_source.html#l01834 Generating best fit viewport}
   * for arc distortion at ImageMagick source.
   */
  getBestFitViewport(viewport) {
    // Forward Map Corners
    let a = this.c0 - this.c1 / 2,
      ca = Math.cos(a),
      sa = Math.sin(a),
      x = this.c2 * ca,
      y = this.c2 * sa,
      vp = new Viewport(x, y, x, y);

    x = (this.c2 - this.c3) * ca;
    y = (this.c2 - this.c3) * sa;
    vp.expand(x, y);

    a = this.c0 + this.c1 / 2;
    ca = Math.cos(a);
    sa = Math.sin(a);
    x = this.c2 * ca;
    y = this.c2 * sa;
    vp.expand(x, y);

    x = (this.c2 - this.c3) * ca;
    y = (this.c2 - this.c3) * sa;
    vp.expand(x, y);

    // Orthogonal points along top of arc
    for (
      a = Math.ceil((this.c0 - this.c1 / 2) / M_PI2) * M_PI2;
      a < this.c0 + this.c1 / 2;
      a += M_PI2
    ) {
      ca = Math.cos(a);
      sa = Math.sin(a);
      x = this.c2 * ca;
      y = this.c2 * sa;
      vp.expand(x, y);
    }

    vp.fixBounds();

    return vp;
  }

  /**
   * @private
   * @param {number} x
   * @param {number} y
   * @returns {Point}
   */
  getUV(x, y) {
    let u, v;

    // what is the angle and radius in the destination image
    u = (Math.atan2(y, x) - this.c0) / M_2PI;
    u -= Math.round(u);
    v = Math.hypot(x, y);

    return [u, v];
  }
}

export default Arc;