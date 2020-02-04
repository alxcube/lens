/**
 * Virtual pixel methods.
 *
 * @readonly
 * @enum {number}
 * @memberOf lens
 * @see {@link https://www.imagemagick.org/Usage/misc/#virtual-pixel Virtual pixel details} at ImageMagick docs.
 * @tutorial 02.05.virtual-pixels-and-matte
 */
const vpx = {
  /**
   * Use image background color.
   */
  BACKGROUND: 1,

  /**
   * Closest edge color.
   */
  EDGE: 3,

  /**
   * Mirror effect.
   */
  MIRROR: 4,

  /**
   * Random color from image.
   */
  RANDOM: 5,

  /**
   * Tile effect.
   */
  TILE: 6,

  /**
   * Transparent color.
   */
  TRANSPARENT: 7,

  /**
   * Black color.
   */
  BLACK: 9,

  /**
   * Gray color.
   */
  GRAY: 10,

  /**
   * White color.
   */
  WHITE: 11,

  /**
   * Tile effect horizontally, background color vertically.
   */
  HORIZONTAL_TILE: 12,

  /**
   * Tile effect vertically, background color horizontally.
   */
  VERTICAL_TILE: 13,

  /**
   * Tile effect horizontally, closest edge color vertically.
   */
  HORIZONTAL_TILE_EDGE: 14,

  /**
   * Tile effect vertically, closest edge color horizontally.
   */
  VERTICAL_TILE_EDGE: 15

  // TODO: implement and add Checker tile an dither methods
};

export default vpx;