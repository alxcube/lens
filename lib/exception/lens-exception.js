/**
 * Base Lens exception
 *
 * @extends Error
 * @memberOf lens.exception
 */
class LensException extends Error {

  /**
   *
   * @param {string} message
   */
  constructor(message) {
    super(message);
    this.name = this.constructor.name;

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = (new Error(message)).stack;
    }
  }
}

export default LensException;