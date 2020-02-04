import Solver from './solver';

/**
 * @summary Solves system of equations using Least Squares method.
 * @memberOf lens.util.gaussJordanElimination
 * @see {@link https://imagemagick.org/api/MagickCore/matrix_8c_source.html#l00829 LeastSquaresAddTerms()} at
 * ImageMagick source.
 */
class LeastSquares extends Solver {

  /**
   *
   * @param {number} rank The rank or size of the dimensions of the square matrix.
   * Also the length of vectors, and number of terms being added.
   * @param {number} numVectors Number of result vectors, and number or results being
   * added.  Also represents the number of separable systems of equations
   * that is being solved.
   */
  constructor(rank, numVectors = 1) {
    const matrix = [];
    const vectors = [];

    for (let i = 0; i < rank; i++) {
      matrix.push(new Array(rank).fill(0));
    }

    for (let i = 0; i < numVectors; i++) {
      vectors.push(new Array(rank).fill(0));
    }

    super(matrix, vectors);
  }

  /**
   * Adds one set of terms and associate results to the
   * given matrix and vectors for solving using least-squares function fitting.
   *
   * @param {number[]} terms The pre-calculated terms (without the unknown coefficient
   * weights) that forms the equation being added.
   * @param {number[]} results The result(s) that should be generated from the given terms
   * weighted by the yet-to-be-solved coefficients.
   * @returns {lens.util.gaussJordanElimination.LeastSquares}
   * @see {@link https://imagemagick.org/api/MagickCore/matrix_8c_source.html#l00829 LeastSquaresAddTerms()} at
   * ImageMagick source.
   */
  addTerms(terms, results) {
    const rank = this.matrix.length;

    for (let j = 0; j < rank; j++) {
      for (let i = 0; i < rank; i++) {
        this.matrix[i][j] += terms[i] * terms[j];
      }

      for (let i = 0; i < this.vectors.length; i++) {
        this.vectors[i][j] += results[i] * terms[j];
      }
    }

    return this;
  }
}

export default LeastSquares;