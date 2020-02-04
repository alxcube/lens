import LensException from './lens-exception';

/**
 * Exception for unsolvable matrix in Gauss-Jordan elimination
 *
 * @extends lens.exception.LensException
 * @memberOf lens.exception
 */
class UnsolvableMatrix extends LensException {

  /**
   *
   * @param {string} message
   */
  constructor(message) {
    super(message);
  }
}

export default UnsolvableMatrix;