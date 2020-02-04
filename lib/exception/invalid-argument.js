import LensException from './lens-exception';

/**
 * Invalid Argument Exception.
 *
 * @memberOf lens.exception
 * @extends lens.exception.LensException
 */
class InvalidArgument extends LensException {
  /**
   *
   * @param {string} message
   */
  constructor(message) {
    super(message);
  }
}

export default InvalidArgument;