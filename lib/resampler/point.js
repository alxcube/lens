import {blendColors} from "../util/util";

/**
 * <p>{@link ResamplerInterface} implementaion without resampling itself.</p>
 * <p>It uses pixel color interpolation and works much faster than {@link lens.resampler.EWA} but produces aliasing
 * effects.</p>
 * <p>It is good for quick creation of distortion previews and also used for {@link DistortionInterface} implementations
 * that doesn't have partial derivatives.</p>
 * <p>It works most quickly when {@link ImageInterface}#interpolationMethod property is set to
 * {@link lens.interpolation.INTEGER}</p>
 *
 * @implements {ResamplerInterface}
 * @memberOf lens.resampler
 * @tutorial 02.03.pixel-color-lookup
 */
class Point {

  constructor() {
    this.matteColor = [0, 0, 0, 0];
    this.scaling = 1;
  }

  /**
   * @inheritDoc
   */
  setImage(image) {
    this.image = image;
    return this;
  }

  /**
   * @inheritDoc
   */
  setMapper(mapper) {
    this.mapper = mapper;
    return this;
  }

  /**
   * @inheritDoc
   */
  getResampledColor(x, y) {
    x = x * this.scaling;
    y = y * this.scaling;

    const validity = this.mapper.getValidity(x, y, this.scaling);

    if (validity > 0) {
      let [u, v] = this.mapper.reverseMap(x, y);
      let color = this.image.getInterpolatedPixelColor(u, v);

      if (validity < 1) {
        return blendColors(color, this.matteColor, validity);
      }

      return color;
    }

    return this.matteColor.slice();
  }
}

export default Point;