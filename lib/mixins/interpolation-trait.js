import methods from '../interpolation';

/**
 * Adds color interpolation functionality for classes that implement {@link ImageInterface}
 *
 * @mixin
 * @memberOf lens.mixins
 */
const interpolationTrait = {
  /**
   * Returns interpolated pixel color.
   *
   * @param {number} x
   * @param {number} y
   * @param {lens.interpolation} [interpolationMethod=this.interpolationMethod]
   * @returns {Color}
   */
  getInterpolatedPixelColor(x, y, interpolationMethod = this.interpolationMethod) {
    switch (interpolationMethod) {
      case methods.AVERAGE:
        return this.interpolateAverage(x, y, 2);
      case methods.AVERAGE_9:
        return this.interpolateAverage(x, y, 3);
      case methods.AVERAGE_16:
        return this.interpolateAverage(x, y, 4);
      case methods.BACKGROUND:
        return this.backgroundColor.slice();
      case methods.INTEGER:
      default:
        return this.getPixelColor(Math.floor(x), Math.floor(y));
    }
  },

  /**
   * Returns interpolated color by average of neighbors.
   *
   * @private
   * @param {number} x
   * @param {number} y
   * @param {number} count
   * @returns {Color}
   */
  interpolateAverage(x, y, count = 2) {
    let startX, startY;

    switch (count) {
      case 2:
        startX = Math.floor(x);
        startY = Math.floor(y);
        break;

      case 3:
        startX = Math.floor(x + 0.5) - 1;
        startY = Math.floor(y + 0.5) - 1;
        break;
      case 4:
        startX = Math.floor(x) - 1;
        startY = Math.floor(y) - 1;
        break;

      default:
        throw new Error("Param 'count' must be integer between 2 and 4.");
    }

    const endX = startX + count;
    const endY = startY + count;
    let color = [0, 0, 0, 0];

    for (let Y = startY; Y < endY; Y++) {
      for (let X = startX; X < endX; X++) {
        this.getPixelColor(x, y).forEach((channel, i) => color[i] += channel);
      }
    }

    const gamma = 1 / (count * count);

    return color.map(channel => Math.round(channel * gamma));
  }
};

export default interpolationTrait;