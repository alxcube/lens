/**
 * Reverse pixel mapping.
 *
 * @memberOf lens.distorter
 * @see {@link https://www.imagemagick.org/Usage/distorts/#mapping Reverse pixel mapping details at ImageMagick docs}
 * @tutorial 02.02.reverse-pixel-mapping
 */
class ReversePixelMapping {

  /**
   *
   * @param {ImageInterface} image Image to be distorted.
   * @param {DistortionInterface} distortion Distortion to be performed.
   * @param {ResamplerInterface} resampler Color resampler.
   */
  constructor(image, distortion, resampler) {
    /**
     * Image being distorted.
     * @type {ImageInterface}
     */
    this.image = image;

    /**
     * Distortion.
     * @type {DistortionInterface}
     */
    this.mapper = distortion;

    /**
     * Resampler.
     * @type {ResamplerInterface}
     */
    this.resampler = resampler;

    /**
     * If set to true, try to calculate best fit viewport.
     * @type {boolean}
     */
    this.bestFit = false;

    /**
     * Override output viewport.
     * @type {lens.Viewport|null}
     */
    this.viewport = null;

    /**
     * Run distortion async.
     * @type {boolean}
     */
    this.async = true;

    /**
     * Output image scaling.
     * @type {number}
     */
    this.outputScaling = 1;
  }

  /**
   * Distorts image.
   *
   * @returns {Promise<ImageInterface>|ImageInterface} New instance of ImageInterface with distorted image or Promise
   * that resolves distorted ImageInterface instance.
   */
  distort() {
    this.resampler.setImage(this.image);
    this.resampler.setMapper(this.mapper);

    const viewport = this.prepareViewport();
    const x1 = Math.floor(viewport.x1);
    const y1 = Math.floor(viewport.y1);
    const x2 = Math.floor(viewport.x2);
    const y2 = Math.floor(viewport.y2);

    const canvas = this.image.getBlank(viewport);

    this.resampler.scaling = 1 / this.outputScaling;

    if (canvas instanceof Promise) {
      return canvas.then(canvas => this.performDistortionAsync(canvas, x1, y1, x2, y2));
    } else if (this.async) {
      return this.performDistortionAsync(canvas, x1, y1, x2, y2);
    }

    return this.performDistortion(canvas, x1, y1, x2, y2);
  }

  /**
   * @protected
   * @param {ImageInterface} canvas
   * @param {number} x1
   * @param {number} y1
   * @param {number} x2
   * @param {number} y2
   * @returns {ImageInterface}
   */
  performDistortion(canvas, x1, y1, x2, y2) {
    for (let y = y1; y <= y2; y++) {
      for (let x = x1; x <= x2; x++) {
        canvas.setPixelColor(x, y, this.resampler.getResampledColor(x + 0.5, y + 0.5));
      }
    }

    return canvas;
  }

  performDistortionAsync(...args) {
    return new Promise(resolve => setTimeout(() => resolve(this.performDistortion(...args), 0)));
  }

  /**
   * @protected
   * @returns {lens.Viewport}
   */
  prepareViewport() {
    let viewport;

    if (this.viewport) {
      viewport = this.viewport.clone();
    } else if (this.bestFit && this.mapper.hasBestFitViewport) {
      viewport = this.mapper.getBestFitViewport(this.image.viewport);
    } else {
      viewport = this.image.viewport.clone();
    }

    viewport.scale(this.outputScaling);

    return viewport;
  }
}

export default ReversePixelMapping;