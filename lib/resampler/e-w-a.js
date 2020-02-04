import vpx from '../vpx';
import interpolation from '../interpolation';
import {MAXIMUM_VALUE} from "../constants";
import {blendColors} from "../util/util";

/**
 * @private
 * @type {number}
 */
const WEIGHT_LOOKUP_TABLE_WIDTH = 1024;

/**
 * @private
 * @param {FilterInterface} filter
 * @param {number} support
 * @returns {number[]}
 */
function buildWeightLookupTable(filter, support) {
  const table = [];

  const rScale = support * Math.sqrt(1 / WEIGHT_LOOKUP_TABLE_WIDTH);

  for (let Q = 0; Q < WEIGHT_LOOKUP_TABLE_WIDTH; Q++) {
    table[Q] = filter.getWeight(Math.sqrt(Q) * rScale);
  }

  return table;
}

/**
 * @private
 * @param value
 * @param quantumRange
 * @returns {number}
 */
function clampToQuantum(value, quantumRange) {
  return Math.max(0, Math.min(quantumRange, value));
}

/**
 * <p>ClampEllipseAxes() function converts the input vectors into a major and
 * minor axis unit vectors, and their magnitude.  This allows us to
 * ensure that the ellipse generated is never smaller than the unit
 * circle and thus never too small for use in EWA resampling.</p>
 *
 * <p>This purely mathematical 'magic' was provided by Professor Nicolas
 * Robidoux and his Masters student Chantal Racette.</p>
 *
 * <p>Reference: "We Recommend Singular Value Decomposition", David Austin
 *   {@link http://www.ams.org/samplings/feature-column/fcarc-svd}</p>
 *
 * <p>By generating major and minor axis vectors, we can actually use the
 * ellipse in its "canonical form", by remapping the dx,dy of the
 * sampled point into distances along the major and minor axis unit
 * vectors.</p>
 *
 * <p>Reference: {@link http://en.wikipedia.org/wiki/Ellipse#Canonical_form}</p>
 *
 * @private
 * @param {number} dux
 * @param {number} duy
 * @param {number} dvx
 * @param {number} dvy
 * @returns {number[]}
 * @see {@link https://imagemagick.org/api/MagickCore/resample_8c_source.html#l00709 ClampUpAxes() at ImageMagick source}
 * @tutorial 02.03.pixel-color-lookup
 */
function clampEllipseAxes(dux, duy, dvx, dvy) {
  /*
   * ClampUpAxes takes an input 2x2 matrix
   *
   * [ a b ] = [ dux duy ]
   * [ c d ] = [ dvx dvy ]
   *
   * and computes from it the major and minor axis vectors [major_x,
   * major_y] and [minor_x,minor_y] of the smallest ellipse containing
   * both the unit disk and the ellipse which is the image of the unit
   * disk by the linear transformation
   *
   * [ dux duy ] [S] = [s]
   * [ dvx dvy ] [T] = [t]
   *
   * (The vector [S,T] is the difference between a position in output
   * space and [X,Y]; the vector [s,t] is the difference between a
   * position in input space and [x,y].)
   */
  /*
   * Output:
   *
   * major_mag is the half-length of the major axis of the "new"
   * ellipse.
   *
   * minor_mag is the half-length of the minor axis of the "new"
   * ellipse.
   *
   * major_unit_x is the x-coordinate of the major axis direction vector
   * of both the "old" and "new" ellipses.
   *
   * major_unit_y is the y-coordinate of the major axis direction vector.
   *
   * minor_unit_x is the x-coordinate of the minor axis direction vector.
   *
   * minor_unit_y is the y-coordinate of the minor axis direction vector.
   *
   * Unit vectors are useful for computing projections, in particular,
   * to compute the distance between a point in output space and the
   * center of a unit disk in output space, using the position of the
   * corresponding point [s,t] in input space. Following the clamping,
   * the square of this distance is
   *
   * ( ( s * major_unit_x + t * major_unit_y ) / major_mag )^2
   * +
   * ( ( s * minor_unit_x + t * minor_unit_y ) / minor_mag )^2
   *
   * If such distances will be computed for many [s,t]'s, it makes
   * sense to actually compute the reciprocal of major_mag and
   * minor_mag and multiply them by the above unit lengths.
   *
   * Now, if you want to modify the input pair of tangent vectors so
   * that it defines the modified ellipse, all you have to do is set
   *
   * newdux = major_mag * major_unit_x
   * newdvx = major_mag * major_unit_y
   * newduy = minor_mag * minor_unit_x = minor_mag * -major_unit_y
   * newdvy = minor_mag * minor_unit_y = minor_mag *  major_unit_x
   *
   * and use these tangent vectors as if they were the original ones.
   * Usually, this is a drastic change in the tangent vectors even if
   * the singular values are not clamped; for example, the minor axis
   * vector always points in a direction which is 90 degrees
   * counterclockwise from the direction of the major axis vector.
   */
  /*
   * Discussion:
   *
   * GOAL: Fix things so that the pullback, in input space, of a disk
   * of radius r in output space is an ellipse which contains, at
   * least, a disc of radius r. (Make this hold for any r>0.)
   *
   * ESSENCE OF THE METHOD: Compute the product of the first two
   * factors of an SVD of the linear transformation defining the
   * ellipse and make sure that both its columns have norm at least 1.
   * Because rotations and reflexions map disks to themselves, it is
   * not necessary to compute the third (rightmost) factor of the SVD.
   *
   * DETAILS: Find the singular values and (unit) left singular
   * vectors of Jinv, clampling up the singular values to 1, and
   * multiply the unit left singular vectors by the new singular
   * values in order to get the minor and major ellipse axis vectors.
   *
   * Image resampling context:
   *
   * The Jacobian matrix of the transformation at the output point
   * under consideration is defined as follows:
   *
   * Consider the transformation (x,y) -> (X,Y) from input locations
   * to output locations. (Anthony Thyssen, elsewhere in resample.c,
   * uses the notation (u,v) -> (x,y).)
   *
   * The Jacobian matrix of the transformation at (x,y) is equal to
   *
   *   J = [ A, B ] = [ dX/dx, dX/dy ]
   *       [ C, D ]   [ dY/dx, dY/dy ]
   *
   * that is, the vector [A,C] is the tangent vector corresponding to
   * input changes in the horizontal direction, and the vector [B,D]
   * is the tangent vector corresponding to input changes in the
   * vertical direction.
   *
   * In the context of resampling, it is natural to use the inverse
   * Jacobian matrix Jinv because resampling is generally performed by
   * pulling pixel locations in the output image back to locations in
   * the input image. Jinv is
   *
   *   Jinv = [ a, b ] = [ dx/dX, dx/dY ]
   *          [ c, d ]   [ dy/dX, dy/dY ]
   *
   * Note: Jinv can be computed from J with the following matrix
   * formula:
   *
   *   Jinv = 1/(A*D-B*C) [  D, -B ]
   *                      [ -C,  A ]
   *
   * What we do is modify Jinv so that it generates an ellipse which
   * is as close as possible to the original but which contains the
   * unit disk. This can be accomplished as follows:
   *
   * Let
   *
   *   Jinv = U Sigma V^T
   *
   * be an SVD decomposition of Jinv. (The SVD is not unique, but the
   * final ellipse does not depend on the particular SVD.)
   *
   * We could clamp up the entries of the diagonal matrix Sigma so
   * that they are at least 1, and then set
   *
   *   Jinv = U newSigma V^T.
   *
   * However, we do not need to compute V for the following reason:
   * V^T is an orthogonal matrix (that is, it represents a combination
   * of rotations and reflexions) so that it maps the unit circle to
   * itself. For this reason, the exact value of V does not affect the
   * final ellipse, and we can choose V to be the identity
   * matrix. This gives
   *
   *   Jinv = U newSigma.
   *
   * In the end, we return the two diagonal entries of newSigma
   * together with the two columns of U.
   */
  /*
   * ClampUpAxes was written by Nicolas Robidoux and Chantal Racette
   * of Laurentian University with insightful suggestions from Anthony
   * Thyssen and funding from the National Science and Engineering
   * Research Council of Canada. It is distinguished from its
   * predecessors by its efficient handling of degenerate cases.
   *
   * The idea of clamping up the EWA ellipse's major and minor axes so
   * that the result contains the reconstruction kernel filter support
   * is taken from Andreas Gustaffson's Masters thesis "Interactive
   * Image Warping", Helsinki University of Technology, Faculty of
   * Information Technology, 59 pages, 1993 (see Section 3.6).
   *
   * The use of the SVD to clamp up the singular values of the
   * Jacobian matrix of the pullback transformation for EWA resampling
   * is taken from the astrophysicist Craig DeForest.  It is
   * implemented in his PDL::Transform code (PDL = Perl Data
   * Language).
   */

  const a = dux;
  const b = duy;
  const c = dvx;
  const d = dvy;

  /*
   * n is the matrix Jinv * transpose(Jinv). Eigenvalues of n are the
   * squares of the singular values of Jinv.
   */
  const aa = a * a;
  const bb = b * b;
  const cc = c * c;
  const dd = d * d;

  /*
   * Eigenvectors of n are left singular vectors of Jinv.
   */
  const n11 = aa + bb;
  const n12 = a * c + b * d;
  const n21 = n12;
  const n22 = cc + dd;
  const det = a * d - b * c;
  const twice_det = det + det;
  const frobenius_squared = n11 + n22;
  const discriminant = (frobenius_squared + twice_det) * (frobenius_squared - twice_det);

  /*
   * In exact arithmetic, discriminant can't be negative. In floating
   * point, it can, because of the bad conditioning of SVD
   * decompositions done through the associated normal matrix.
   */
  const sqrt_discriminant = Math.sqrt(discriminant > 0 ? discriminant : 0);

  /*
   * s1 is the largest singular value of the inverse Jacobian
   * matrix. In other words, its reciprocal is the smallest singular
   * value of the Jacobian matrix itself.
   * If s1 = 0, both singular values are 0, and any orthogonal pair of
   * left and right factors produces a singular decomposition of Jinv.
   */
  /*
   * Initially, we only compute the squares of the singular values.
   */
  const s1s1 = 0.5 * (frobenius_squared + sqrt_discriminant);

  /*
   * s2 the smallest singular value of the inverse Jacobian
   * matrix. Its reciprocal is the largest singular value of the
   * Jacobian matrix itself.
   */
  const s2s2 = 0.5 * (frobenius_squared - sqrt_discriminant);
  const s1s1minusn11 = s1s1 - n11;
  const s1s1minusn22 = s1s1 - n22;

  /*
   * u1, the first column of the U factor of a singular decomposition
   * of Jinv, is a (non-normalized) left singular vector corresponding
   * to s1. It has entries u11 and u21. We compute u1 from the fact
   * that it is an eigenvector of n corresponding to the eigenvalue
   * s1^2.
   */
  const s1s1minusn11_squared = s1s1minusn11 * s1s1minusn11;
  const s1s1minusn22_squared = s1s1minusn22 * s1s1minusn22;

  /*
   * The following selects the largest row of n-s1^2 I as the one
   * which is used to find the eigenvector. If both s1^2-n11 and
   * s1^2-n22 are zero, n-s1^2 I is the zero matrix.  In that case,
   * any vector is an eigenvector; in addition, norm below is equal to
   * zero, and, in exact arithmetic, this is the only case in which
   * norm = 0. So, setting u1 to the simple but arbitrary vector [1,0]
   * if norm = 0 safely takes care of all cases.
   */
  const temp_u11 = (s1s1minusn11_squared >= s1s1minusn22_squared) ? n12 : s1s1minusn22;
  const temp_u21 = (s1s1minusn11_squared >= s1s1minusn22_squared) ? s1s1minusn11 : n21;
  const norm = Math.sqrt(temp_u11 * temp_u11 + temp_u21 * temp_u21);

  /*
   * Finalize the entries of first left singular vector (associated
   * with the largest singular value).
   */
  const u11 = norm > 0 ? temp_u11 / norm : 1;
  const u21 = norm > 0 ? temp_u21 / norm : 0;

  /*
   * Clamp the singular values up to 1.
   */
  const major_mag = s1s1 <= 1 ? 1 : Math.sqrt(s1s1);
  const minor_mag = s2s2 <= 1 ? 1 : Math.sqrt(s2s2);


  const major_x = u11 * major_mag;
  const major_y = u21 * major_mag;
  const minor_x = -u21 * minor_mag;
  const minor_y = u11 * minor_mag;

  return [
    major_x,
    major_y,
    minor_x,
    minor_y,
    major_mag,
    minor_mag
  ];
}

/**
 * Elliptical Weighted Average.
 * Resamples pixel color using Elliptical Weighted Average technique.
 *
 * @implements {ResamplerInterface}
 * @memberOf lens.resampler
 * @see {@link https://www.imagemagick.org/Usage/distorts/#distort_ewa EWA details} at ImageMagick docs.
 * @see {@link https://www2.eecs.berkeley.edu/Pubs/TechRpts/1989/CSD-89-516.pdf Fundamentals of Texture Mapping and Image Warping by Paul S. Heckbert}
 * page 41, section 3.4, 3.5
 * @see {@link https://imagemagick.org/api/MagickCore/resample_8c_source.html#l01038 ScaleResampleFilter()} at
 * ImageMagick source.
 * @see {@link https://imagemagick.org/api/MagickCore/resample_8c_source.html#l00315 ResamplePixelColor()} at
 * ImageMagick source.
 */
class EWA {

  /**
   *
   * @param {FilterInterface} filter
   */
  constructor(filter) {
    /**
     * Reconstruction filter.
     * @protected
     * @type {FilterInterface}
     */
    this.resizeFilter = filter;

    /**
     * The practical working support of the filter
     * @protected
     * @type {number}
     */
    this.support = this.resizeFilter.support * this.resizeFilter.blur;

    /**
     * Matte color for invalid mappings.
     * @type {Color}
     */
    this.matteColor = [0, 0, 0, 0];

    /**
     * Lookup table of weights for filtered average in elliptical area.
     * @protected
     * @type {number[]}
     */
    this.weightLookupTable = buildWeightLookupTable(this.resizeFilter, this.support);

    /**
     * Image being resampled.
     * @type {ImageInterface}
     */
    this.image = null;

    /**
     * Distortion mapper.
     * @protected
     * @type {DistortionInterface}
     */
    this.mapper = null;

    /**
     * Cached for direct access image virtual viewport.
     * @protected
     * @type {lens.Viewport}
     */
    this.imageViewport = null;

    /**
     * Cached image area.
     * @protected
     * @type {number}
     */
    this.imageArea = null;

    /**
     * Cached for direct access image virtual pixel method.
     * @protected
     * @type {lens.vpx}
     */
    this.imageVirtualPixelMethod = null;

    /**
     * Cached image average color.
     * @protected
     * @type {Color|null}
     */
    this.imageAverageColor = null;

    /**
     * Ellipse equiation A.
     * @protected
     * @type {number}
     */
    this.A = 0;

    /**
     * Ellipse equation B.
     * @protected
     * @type {number}
     */
    this.B = 0;

    /**
     * Ellipse equation C.
     * @protected
     * @type {number}
     */
    this.C = 0;

    /**
     * Ellipse equation F.
     * @protected
     * @type {number}
     */
    this.F = 0;

    /**
     * @protected
     * @type {number}
     */
    this.uLimit = 0;

    /**
     * @protected
     * @type {number}
     */
    this.vLimit = 0;

    /**
     * @protected
     * @type {number}
     */
    this.uWidth = 0;

    /**
     * @protected
     * @type {number}
     */
    this.slope = 0;

    /**
     * Used for distortions with constant partial derivatives to flag that ellipse already has been set up.
     * @protected
     * @type {boolean}
     */
    this.ellipseIsSetUp = false;

    /**
     * Flags that ellipse is too large and it is impractical to resample color -- better use some of possible
     * optimizations.
     * @protected
     * @type {boolean}
     */
    this.limitReached = false;

    /**
     * Output image scaling factor.
     * @type {number}
     */
    this.scaling = 1;
  }

  /**
   * @inheritDoc
   */
  getResampledColor(x, y) {
    x = x * this.scaling;
    y = y * this.scaling;

    const validity = this.mapper.getValidity(x, y, this.scaling);

    if (validity > 0) {
      const [u, v] = this.mapper.reverseMap(x, y);

      if (this.mapper.hasConstantPartialDerivatives) {
        this.setupEllipseOnce(...this.mapper.getPartialDerivatives(x, y));
      } else {
        this.setupEllipse(...this.mapper.getPartialDerivatives(x, y));
      }

      const color = this.getWeightedAverage(u, v);

      if (validity < 1) {
        return blendColors(color, validity, this.matteColor);
      }

      return color;
    }

    return this.matteColor.slice();
  }

  /**
   * @inheritDoc
   */
  setImage(image) {
    this.image = image;
    // cache image viewport for faster direct access.
    this.imageViewport = this.image.viewport;
    // cache image area.
    this.imageArea = this.imageViewport.area();
    // cache image virtual pixel method (will it be faster actually?)
    this.imageVirtualPixelMethod = this.image.virtualPixelMethod;
    // reset cached image average color
    this.imageAverageColor = null;
    return this;
  }

  /**
   * @inheritDoc
   */
  setMapper(mapper) {
    if (!mapper.hasPartialDerivatives) {
      throw new Error('Pixel mapper must have partial derivatives to use this resampler');
    }

    this.mapper = mapper;
    this.ellipseIsSetUp = false;

    return this;
  }

  /**
   * Calculates ellipse once for distortions with constant partial derivatives.
   *
   * @private
   * @param derivatives
   * @returns {lens.resampler.EWA}
   */
  setupEllipseOnce(...derivatives) {
    if (!this.ellipseIsSetUp) {
      this.ellipseIsSetUp = true;
      return this.setupEllipse(...derivatives);
    }

    return this;
  }

  /**
   * Calculates ellipse for EWA resampling using partial derivatives.
   *
   * @private
   * @param derivatives
   * @returns {lens.resampler.EWA}
   */
  setupEllipse(...derivatives) {
    this.limitReached = false;

    derivatives = derivatives.map(derivative => derivative * this.scaling);

    return this.initEllipse(...derivatives)
      .scaleEllipse();
  }

  /**
   * Calculates ellipse equation for given distortion partial derivatives.
   *
   * @private
   * @param derivatives
   * @returns {lens.resampler.EWA}
   */
  initEllipse(...derivatives) {
    const [
      major_x,
      major_y,
      minor_x,
      minor_y,
      major_mag,
      minor_mag
    ] = clampEllipseAxes(...derivatives);

    this.A = major_y * major_y + minor_y * minor_y;
    this.B = -2 * (major_x * major_y + minor_x * minor_y);
    this.C = major_x * major_x + minor_x * minor_x;
    this.F = major_mag * minor_mag;
    this.F *= this.F;

    /*
     * If one or both of the scaling vectors is impossibly large
     * (producing a very large raw F value), we may as well not bother
     * doing any form of resampling since resampled area is very large.
     * In this case some alternative means of pixel sampling, such as
     * the average of the whole image is needed to get a reasonable
     * result. Calculate only as needed.
     */
    this.limitReached = 4 * this.A * this.C - this.B * this.B > MAXIMUM_VALUE;

    return this;
  }

  /**
   * Scales ellipse to match filter support.
   *
   * @private
   * @returns {lens.resampler.EWA}
   */
  scaleEllipse() {
    if (!this.limitReached) {
      this.F *= this.support * this.support;
      this.uLimit = Math.sqrt(this.C * this.F / (this.A * this.C - 0.25 * this.B * this.B));
      this.vLimit = Math.sqrt(this.A * this.F / (this.A * this.C - 0.25 * this.B * this.B));
      this.uWidth = Math.sqrt(this.F / this.A);
      this.slope = -this.B / (2 * this.A);

      /*
       * Check the absolute area of the parallelogram involved.
       * This limit needs more work, as it is too slow for larger images
       * with tiled views of the horizon.
       */
      if (this.uWidth * this.vLimit > 4 * this.imageArea) {
        this.limitReached = true;
        return this;
      }

      /* Scale ellipse formula to directly index the Filter Lookup Table */
      const scale = WEIGHT_LOOKUP_TABLE_WIDTH / this.F;
      this.A *= scale;
      this.B *= scale;
      this.C *= scale;
    }

    return this;
  }

  /**
   * Returns weighted average color at given point using scaled EWA ellipse.
   *
   * @private
   * @param {number} u0
   * @param {number} v0
   * @returns {Color}
   */
  getWeightedAverage(u0, v0) {
    if (this.doesntNeedResampling(u0, v0)) {
      /* The area being resampled is simply a solid color
       * just return a single lookup color.
       */
      return this.image.getPixelColor(u0, v0);
    }

    if (this.limitReached) {
      // When Scaling limits reached, return an 'averaged' result.

      switch (this.imageVirtualPixelMethod) {
        case vpx.EDGE:
        case vpx.HORIZONTAL_TILE_EDGE:
        case vpx.VERTICAL_TILE_EDGE:
          /*
           * We need an average edge pixel, from the correct edge!
           * How should I calculate an average edge color?
           * Just returning an averaged neighbourhood,
           * works well in general, but falls down for TileEdge methods.
           * This needs to be done properly!!!!!!
           */
          return this.image.getInterpolatedPixelColor(u0, v0, interpolation.AVERAGE);
        case vpx.HORIZONTAL_TILE:
        case vpx.VERTICAL_TILE:
          /*
          * just return the background pixel - Is there more direct way?
          */
          return this.image.getPixelColor(
            this.imageViewport.x1 - 1,
            this.imageViewport.y1 - 1
          );
        default:
          return this.getImageAverageColor();
      }
    }

    let divisorM = 0,
      divisorC = 0,
      red = 0,
      green = 0,
      blue = 0,
      alpha = 0;

    /*
     * Determine the parellelogram bounding box fitted to the ellipse
     * centered at u0,v0.  This area is bounding by the lines...
     */
    const v1 = Math.ceil(v0 - this.vLimit);
    const v2 = Math.floor(v0 + this.vLimit);

    // scan line start and width accross the parallelogram
    let u1 = u0 + (v1 - v0) * this.slope - this.uWidth;
    let uw = 2 * this.uWidth + 1;

    /*
     * Do weighted resampling of all pixels,  within the scaled ellipse,
     * bound by a Parellelogram fitted to the ellipse.
     */

    let DDQ = 2 * this.A;

    for (let v = v1; v < v2; v++) {
      let ustart = Math.ceil(u1); // first pixel in scanline
      u1 += this.slope; // start of next scan line
      let uend = ustart + uw;

      // location of this first pixel, relative to u0,v0
      let U = ustart - u0;
      let V = v - v0;

      // Q = ellipse quotent ( if Q<F then pixel is inside ellipse)
      let Q = (this.A * U + this.B * V) * U + this.C * V * V;
      let DQ = this.A * (2 * U + 1) + this.B * V;

      // count up the weighted pixel colors
      for (let u = ustart; u < uend; u++) {
        // Note that the ellipse has been pre-scaled so F = $this->weightLookupTableWidth
        if (Q < WEIGHT_LOOKUP_TABLE_WIDTH) {
          let weight = this.weightLookupTable[Math.floor(Q)];
          let [r, g, b, a] = this.image.getPixelColor(u, v);
          alpha += weight * a;
          divisorM += weight;

          weight *= (a / this.image.quantumRange);

          red += r * weight;
          green += g * weight;
          blue += b * weight;
          divisorC += weight;
        }

        Q += DQ;
        DQ += DDQ;
      }
    }

    // Result sanity check -- this should NOT happen
    if (!divisorC || !divisorM) {
      /*
       * not enough pixels, or bad weighting in resampling,
       * resort to direct interpolation
       */
      return this.image.getInterpolatedPixelColor(u0, v0);
    }

    return [
      clampToQuantum(Math.round(red / divisorC), this.image.quantumRange),
      clampToQuantum(Math.round(green / divisorC), this.image.quantumRange),
      clampToQuantum(Math.round(blue / divisorC), this.image.quantumRange),
      clampToQuantum(Math.round(alpha / divisorM), this.image.quantumRange)
    ];
  }

  /**
   * Checks if no resampling is needed (if single pixel color should be returned).
   *
   * @private
   * @param {number} u
   * @param {number} v
   * @returns {boolean}
   */
  doesntNeedResampling(u, v) {
    switch (this.imageVirtualPixelMethod) {
      case vpx.TRANSPARENT:
      case vpx.BACKGROUND:
      case vpx.BLACK:
      case vpx.WHITE:
      case vpx.GRAY:
        return this.limitReached || this.outOfImageBounds(u, v);
      case vpx.EDGE:
        return (u + this.uLimit < this.imageViewport.x1 && v + this.vLimit < this.imageViewport.y1)
          || (u + this.uLimit < this.imageViewport.x1 && v - this.vLimit > this.imageViewport.y2)
          || (u - this.uLimit > this.imageViewport.x2 && v + this.vLimit < this.imageViewport.y1)
          || (u - this.uLimit > this.imageViewport.x2 && v - this.vLimit > this.imageViewport.y2);
      case vpx.HORIZONTAL_TILE:
        return v + this.vLimit < this.imageViewport.y1 || v - this.vLimit > this.imageViewport.y2;
      case vpx.VERTICAL_TILE:
        return u + this.uLimit < this.imageViewport.x1 || u - this.uLimit > this.imageViewport.x2;
      default:
        return false;
    }
  }

  /**
   * Laziliy returns cached image average color.
   *
   * @private
   * @returns {Color}
   */
  getImageAverageColor() {
    if (this.imageAverageColor === null) {
      this.imageAverageColor = this.image.getAverageColor();
    }

    return this.imageAverageColor.slice();
  }

  /**
   * Checks if ellipse is completely out of image bounds.
   *
   * @private
   * @param {number} u
   * @param {number} v
   * @returns {boolean}
   */
  outOfImageBounds(u, v) {
    return u + this.uLimit < this.imageViewport.x1
      || u - this.uLimit > this.imageViewport.x2
      || v + this.vLimit < this.imageViewport.y1
      || v - this.vLimit > this.imageViewport.y2;
  }
}

export default EWA;