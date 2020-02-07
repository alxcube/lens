import Canvas from './canvas';

/**
 * Wrapper for {@link lens.image.Canvas} for direct distortion of DOM Image objects.
 * Distortion result will contain new DOM Image object in {@link lens.image.DomImage#image} property.
 *
 * @implements {ImageInterface}
 * @memberOf lens.image
 * @extends lens.image.Canvas
 */
class DomImage extends Canvas {
  /**
   *
   * @param {external:Image|HTMLImageElement} image DOM Image object
   */
  constructor(image) {
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    canvas.getContext('2d').drawImage(image, 0, 0);
    super(canvas);

    this.image = image;
  }

  /**
   * @inheritDoc
   */
  prepareBlank(width, height) {
    return new this.constructor(new Image(width, height));
  }

  /**
   * @inheritDoc
   */
  sync() {
    super.sync();

    return new Promise(resolve => {
      this.image.onload = () => resolve(this);

      this.image.src = this.canvas.toDataURL();
    });
  }

  /**
   * @inheritDoc
   */
  resize(width, height) {
    return this.sync().then(() => {
      return new Promise(resolve => {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        canvas.getContext('2d').drawImage(this.image, 0, 0, this.width, this.height, 0, 0, width, height);

        const image = new Image(width, height);

        image.onload = () => {
          const resized = new this.constructor(image);
          resolve(resized);
        };

        image.src = canvas.toDataURL();
      });
    });
  }
}

export default DomImage;