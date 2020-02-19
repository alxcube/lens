import LensException from './lens-exception';

/**
 * Exception for cases when invalid number of arguments passed
 *
 * @extends lens.exception.LensException
 * @memberOf lens.exception
 */
class InvalidArgumentsLength extends LensException {
  /**
   *
   * @param {string} message
   */
  constructor(message) {
    super(message);
    this.name = 'InvalidArgumentsLength';
  }
}

export default InvalidArgumentsLength;