/**
 * @summary Virtual viewport class.
 *
 * @description Represents image's virtual position at it's coordinate space.
 *
 * @memberOf lens
 * @see {@link https://www.imagemagick.org/Usage/basics/#page Virtual canvas offset} at ImageMagick docs.
 * @tutorial 02.06.virtual-viewport
 */
class Viewport {
  /**
   *
   * @param {number} x1 Left edge coordinate of viewport.
   * @param {number} y1 Top edge coordinate  of viewport.
   * @param {number} x2 Right edge coordinate of viewport.
   * @param {number} y2 Bottom edge coordinate of viewport.
   */
  constructor(x1, y1, x2, y2) {
    /**
     * Left edge coordinate of viewport.
     *
     * @type {number}
     */
    this.x1 = x1;

    /**
     * Top edge coordinate of viewport.
     * @type {number}
     */
    this.y1 = y1;

    /**
     * Right edge coordinate of viewport.
     * @type {number}
     */
    this.x2 = x2;

    /**
     * Bottom edge coordinate of viewport.
     * @type {number}
     */
    this.y2 = y2;
  }

  /**
   * Returns virtual viewport width -- same as image actual width.
   *
   * @returns {number}
   */
  width() {
    return this.x2 - this.x1 + 1;
  }

  /**
   * Returns virtual viewport height -- same as image actual height.
   *
   * @returns {number}
   */
  height() {
    return this.y2 - this.y1 + 1;
  }

  /**
   * Returns viewport area.
   *
   * @returns {number}
   */
  area() {
    return this.width() * this.height();
  }

  /**
   * Checks if viewport contains given coords.
   *
   * @param {number} x
   * @param {number} y
   * @returns {boolean}
   */
  contains(x, y) {
    return x >= this.x1 && x <= this.x2 && y >= this.y1 && y <= this.y2;
  }

  /**
   * Expands viewport to contain given coords.
   *
   * @param {number} x
   * @param {number} y
   * @returns {lens.Viewport}
   */
  expand(x, y) {
    this.x1 = Math.min(this.x1, x);
    this.x2 = Math.max(this.x2, x);
    this.y1 = Math.min(this.y1, y);
    this.y2 = Math.max(this.y2, y);
    return this;
  }

  /**
   * Clones viewport into new instance.
   *
   * @returns {lens.Viewport}
   */
  clone() {
    return new this.constructor(this.x1, this.y1, this.x2, this.y2);
  }

  /**
   * Fix bounds after best fit viewport calculation.
   *
   * @returns {lens.Viewport}
   */
  fixBounds() {
    this.x1 = Math.floor(this.x1 - 0.5);
    this.y1 = Math.floor(this.y1 - 0.5);
    this.x2 = Math.ceil(this.x2 - 0.5);
    this.y2 = Math.ceil(this.y2 - 0.5);
    return this;
  }

  /**
   * Scales viewport bounds.
   *
   * @param {number} scale
   * @returns {lens.Viewport}
   */
  scale(scale) {
    this.x1 = Math.round(this.x1 * scale);
    this.y1 = Math.round(this.y1 * scale);
    this.x2 = Math.round(this.x2 * scale);
    this.y2 = Math.round(this.y2 * scale);
    return this;
  }

  /**
   * Resets viewport offset.
   *
   * @returns {lens.Viewport}
   */
  reset() {
    let width = this.width(),
        height = this.height();
    this.x1 = 0;
    this.y1 = 0;
    this.x2 = this.x1 + width - 1;
    this.y2 = this.y1 + height - 1;
    return this;
  }

  /**
   * Sets viewport offset
   *
   * @param {number} x
   * @param {number} y
   * @returns {lens.Viewport}
   */
  offset(x, y) {
    this.x1 += x;
    this.y1 += y;
    this.x2 += x;
    this.y2 += y;
    return this;
  }
}

export default Viewport;