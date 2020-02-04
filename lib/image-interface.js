/**
 * @interface ImageInterface
 *
 */

/**
 * Image width.
 *
 * @readonly
 * @name ImageInterface#width
 * @type {number}
 */

/**
 * Image height.
 *
 * @readonly
 * @name ImageInterface#height
 * @type {number}
 */

/**
 * Image virtual viewport.
 *
 * @name ImageInterface#viewport
 * @type {lens.Viewport}
 * @tutorial {02.06.virtual-viewport}
 */

/**
 * Image background color. Used primarily for virtual pixels.
 *
 * @name ImageInterface#backgroundColor
 * @type {Color}
 */

/**
 * Image virtual pixel method.
 *
 * @name ImageInterface#virtualPixelMethod
 * @type {lens.vpx}
 * @tutorial 02.05.virtual-pixels-and-matte
 */

/**
 * Image quantum range (255 for 8 bit per channel color depth).
 *
 * @readonly
 * @name ImageInterface#quantumRange
 * @type {number}
 */

/**
 * Image default color interpolation method.
 *
 * @name ImageInterface#interpolationMethod
 * @type {lens.interpolation}
 */

/**
 * Returns color at given image coordinates, considering virtual viewport and virtual pixel method
 *
 * @method
 * @name ImageInterface#getPixelColor
 * @param {number} x
 * @param {number} y
 * @returns {Color}
 */

/**
 * Sets pixel color at given image coordinates, considering virtual viewport
 *
 * @method
 * @name ImageInterface#setPixelColor
 * @param {number} x
 * @param {number} y
 * @param {Color} color
 */

/**
 * Returns average color of whole image
 *
 * @method
 * @name ImageInterface#getAverageColor
 * @returns {Color}
 */

/**
 * Returns new blank image with given virtual viewport
 *
 * @method
 * @name ImageInterface#getBlank
 * @param {lens.Viewport} viewport
 * @returns {ImageInterface|Promise<ImageInterface>}
 */

/**
 * Returns interpolated pixel color at given coordinates, considering virtual viewport and virtual pixel method
 *
 * @method
 * @name ImageInterface#getInterpolatedPixelColor
 * @param {number} x
 * @param {number} y
 * @param {lens.interpolation} [interpolationMethod=this.interpolationMethod]
 * @returns {Color}
 */

/**
 * This method is used to sync some external image data storage and image itself. It is called after image distortion
 * is complete (all pixels of destination image are filled).
 *
 * @method
 * @name ImageInterface#sync
 * @returns {ImageInterface|Promise<ImageInterface>}
 */

/**
 * Scale image and it's viewport (keeping aspect ratio). This is utilized in supersampling.
 *
 * @method
 * @name ImageInterface#scale
 * @param {number} scale
 * @returns {ImageInterface|Promise<ImageInterface>}
 */