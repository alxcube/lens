import vpxMethods from '../vpx';

/**
 * @private
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @returns {Point}
 */
function getEdgeCoords(x, y, width, height) {
  return [
    Math.max(0, Math.min(width - 1, x)),
    Math.max(0, Math.min(height - 1, y))
  ];
}

/**
 * @private
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @returns {Point}
 */
function getTileCoords(x, y, width, height) {
  let rx = x % width,
    ry = y % height;

  return [
    rx < 0 ? width + rx : rx,
    ry < 0 ? height + ry : ry
  ];
}

/**
 * Adds virtual pixel behavior to classes that implement ImageInterface.
 *
 * @mixin
 * @memberOf lens.mixins
 * @tutorial 02.05.virtual-pixels-and-matte
 */
const virtualPixelTrait = {
  /**
   * Returns virtual pixel color.
   *
   * @param {number} x Image X-coordinate OUTSIDE of image bounds.
   * @param {number} y Image Y-coordinate OUTSIDE of image bounds.
   * @param {lens.vpx} method Virtual pixel method.
   * @returns {Color}
   */
  getVirtualPixelColor(x, y, method) {
    switch (method) {
      case vpxMethods.BACKGROUND:
        return this.backgroundColor.slice();

      case vpxMethods.EDGE:
        return this.getImagePixelColor(...getEdgeCoords(x, y, this.width, this.height));

      case vpxMethods.MIRROR:
        let [tx, ty] = getTileCoords(x, y, this.width * 2, this.height * 2);

        if (tx > this.width - 1) {
          tx = this.width - (tx - this.width) - 1;
        }

        if (ty > this.height - 1) {
          ty = this.height - (ty - this.height) - 1;
        }

        return this.getImagePixelColor(tx, ty);

      case vpxMethods.TILE:
        return this.getImagePixelColor(...getTileCoords(x, y, this.width, this.height));

      case vpxMethods.TRANSPARENT:
      default:
        return [0, 0, 0, 0];

      case vpxMethods.BLACK:
        return [0, 0, 0, this.quantumRange];

      case vpxMethods.WHITE:
        return new Array(4).fill(this.quantumRange);

      case vpxMethods.GRAY:
        return new Array(3).fill(Math.round(this.quantumRange / 2)).concat([this.quantumRange]);

      case vpxMethods.HORIZONTAL_TILE:
      case vpxMethods.HORIZONTAL_TILE_EDGE:
        if (y < 0 || y >= this.height) {
          return method === vpxMethods.HORIZONTAL_TILE ? this.backgroundColor.slice()
            : this.getImagePixelColor(...getEdgeCoords(x, y, this.width, this.height));
        }

        return this.getImagePixelColor(...getTileCoords(x, y, this.width, this.height));

      case vpxMethods.VERTICAL_TILE:
      case vpxMethods.VERTICAL_TILE_EDGE:
        if (x < 0 || y >= this.width) {
          return method === vpxMethods.VERTICAL_TILE ? this.backgroundColor.slice()
            : this.getImagePixelColor(...getEdgeCoords(x, y, this.width, this.height));
        }

        return this.getImagePixelColor(...getTileCoords(x, y, this.width, this.height));

      case vpxMethods.RANDOM:
        return this.getImagePixelColor(
          Math.floor(Math.random() * this.width),
          Math.floor(Math.random() * this.height)
        );
    }
  }
};

export default virtualPixelTrait;