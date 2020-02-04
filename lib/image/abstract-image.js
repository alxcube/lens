import Viewport from '../viewport';
import vpx from '../vpx';
import virtualPixelTrait from '../mixins/virtual-pixel-trait';
import interpolationTrait from '../mixins/interpolation-trait';
import interpolation from '../interpolation';

function notImplemented(method) {
  throw new Error(`${method}() is abstract method and must be implemented by child class`);
}

/**
 * Abstract image class for ImageInterface implementation.
 *
 * @implements {ImageInterface}
 * @memberOf lens.image
 * @abstract
 * @mixes lens.mixins.interpolationTrait
 * @mixes lens.mixins.virtualPixelTrait
 */
class AbstractImage {

  /**
   * @param {number} width Image width
   * @param {number} height Image height
   */
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.viewport = new Viewport(0, 0, this.width - 1, this.height - 1);
    this.backgroundColor = [0, 0, 0, 0] // Transparent;
    this.virtualPixelMethod = vpx.TRANSPARENT;
    this.quantumRange = 255;
    this.interpolationMethod = interpolation.INTEGER;
  }

  /**
   * @inheritDoc
   */
  getPixelColor(x, y) {
    x = Math.floor(x - this.viewport.x1);
    y = Math.floor(y - this.viewport.y1);

    if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
      return this.getImagePixelColor(x, y);
    }

    return this.getVirtualPixelColor(x, y, this.virtualPixelMethod);
  }

  /**
   * @inheritDoc
   */
  setPixelColor(x, y, color) {
    x = Math.floor(x - this.viewport.x1);
    y = Math.floor(y - this.viewport.y1);

    if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
      this.setImagePixelColor(x, y, color);

      return this;
    }

    throw new Error(`Given coords (${x}, ${y}) is out of image bounds`);
  }

  /**
   * @inheritDoc
   */
  getBlank(viewport) {
    const blank = this.prepareBlank(viewport.width(), viewport.height());

    if (blank instanceof Promise) {
      return blank.then(blank => {
        blank.viewport  = viewport;
        return blank;
      });
    }

    blank.viewport = viewport;
    return blank;
  }

  /**
   * @inheritDoc
   */
  scale(scale) {
    const viewport = this.viewport.clone();
    viewport.scale(scale);
    const resized = this.resize(viewport.width(), viewport.height());

    if (resized instanceof Promise) {
      return resized.then(() => {
        resized.viewport = viewport;
        return resized;
      });
    }

    resized.viewport = viewport;
    return resized;
  }

  /**
   * @inheritDoc
   */
  sync() {
    return this;
  }

  /**
   * Returns pixel color at given image coords. Image coords MUST be: x ∈ [0; width - 1], y ∈ [0; height - 1].
   *
   * @abstract
   * @protected
   * @param {number} x
   * @param {number} y
   * @returns {Color}
   */
  getImagePixelColor(x, y) {
    notImplemented('getImagePixelColor');
  }

  /**
   * Sets pixel color at given image coordinates.
   *
   * @abstract
   * @protected
   * @param {number} x
   * @param {number} y
   * @param {Color} color
   */
  setImagePixelColor(x, y, color) {
    notImplemented('setImagePixelColor');
  }

  /**
   * Prepares blank image for {@link ImageInterface#getBlank} method.
   *
   * @abstract
   * @protected
   * @param {number} width
   * @param {number} height
   * @returns {ImageInterface}
   */
  prepareBlank(width, height) {
    notImplemented('prepareBlank');
  }

  /**
   * Returns average color of whole image.
   *
   * @abstract
   * @returns {Color}
   */
  getAverageColor() {
    notImplemented('getAverageColor');
  }

  /**
   * Returns resized instance of self.
   *
   * @abstract
   * @protected
   * @param {number} width
   * @param {number} height
   * @returns {ImageInterface|Promise<ImageInterface>}
   */
  resize(width, height) {
    notImplemented('resize');
  }
}

Object.assign(AbstractImage.prototype, virtualPixelTrait);
Object.assign(AbstractImage.prototype, interpolationTrait);

export default AbstractImage;