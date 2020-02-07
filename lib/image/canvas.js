import AbstractImage from './abstract-image';

/**
 * ImageInterface implementation for distortion using HTML5 Canvas objects.
 * Distortion result will contain new Canvas object in {@link lens.image.Canvas#canvas} property.
 *
 * @implements {ImageInterface}
 * @memberOf lens.image
 * @extends lens.image.AbstractImage
 */
class Canvas extends AbstractImage {

  /**
   *
   * @param {HTMLCanvasElement} canvas
   */
  constructor(canvas) {
    super(canvas.width, canvas.height);
    this.canvas     = canvas;
    this.imageData  = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height);
    this.data       = this.imageData.data;
  }

  /**
   * @inheritDoc
   */
  getImagePixelColor(x, y) {
    const offset = (y * this.width + x) * 4;

    return Array.prototype.slice.call(
      this.data,
      offset,
      offset + 4
    );
  }

  /**
   * @inheritDoc
   */
  setImagePixelColor(x, y, color) {
    const offset = (y * this.width + x) * 4;

    color.forEach((channel, i) => this.data[offset + i] = channel);
  }

  /**
   * @inheritDoc
   */
  prepareBlank(width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    return new this.constructor(canvas);
  }

  /**
   * @inheritDoc
   */
  sync() {
    this.canvas.getContext('2d').putImageData(this.imageData, 0, 0);

    return this;
  }

  /**
   * @inheritDoc
   */
  getAverageColor() {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    canvas.getContext('2d').drawImage(this.canvas, 0, 0, this.width, this.height, 0, 0, 1, 1);
    return Array.prototype.slice.call(
      canvas.getContext('2d').getImageData(0, 0, 1, 1).data
    );
  }

  /**
   * @inheritDoc
   */
  resize(width, height) {
    const dst = document.createElement('canvas');
    dst.width = width;
    dst.height = height;
    dst.getContext('2d').drawImage(this.canvas, 0, 0, this.width, this.height, 0, 0, width, height);
    return new this.constructor(dst);
  }
}

export default Canvas;