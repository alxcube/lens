import UnsolvableMatrix from '../../exception/unsolvable-matrix';
import {perceptibleReciprocal} from "../util";

/**
 * @private
 * @param {Array} array
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 */
function swap(array, row1, col1, row2, col2) {
  if (array[row1][col1] !== array[row2][col2]) {
    array[row1][col1] += array[row2][col2];
    array[row2][col2] = array[row1][col1] - array[row2][col2];
    array[row1][col1] -= array[row2][col2];
  }
}

function unsolvable() {
  throw new UnsolvableMatrix("Can't solve given matrix using Gauss-Jordan method");
}

/**
 * @summary Solves system of equations using Gauss-Jordan elimination.
 *
 * @description <p>Brings the matrix to reduced row echelon form,
 *  while simultaneously reducing and thus solving the augmented results
 *  matrix.</p>
 *
 * <p>See also {@link http://en.wikipedia.org/wiki/Gauss-Jordan_elimination}</p>
 *
 *
 *  <p>Note that the 'matrix' is given as a 'array of arrays' of rank size.
 *  That is values can be assigned as   matrix[row][column]   where 'row' is
 *  typically the equation, and 'column' is the term of the equation.
 *  That is the matrix is in the form of a 'row first array'.</p>
 *
 *  <p>However 'vectors' is a 'array of arrays' which can have any number
 *  of columns, with each column array the same 'rank' size as 'matrix'.</p>
 *
 *  <p>This allows for simpler handling of the results, especially is only one
 *  column 'vector' is all that is required to produce the desired solution.</p>
 *
 *  <p>For example, the 'vectors' can consist of simple array of
 *  numbers.  when only one set of simultaneous equations is to be solved from
 *  the given set of coefficient weighted terms.</p>
 *
 *  <p>However by specifying more 'columns' (as an 'array of vector columns',
 *  you can use this function to solve a set of 'separable' equations.</p>
 *
 *  <p>For example a distortion function where    <code>u = U(x,y)  v = V(x,y)</code>
 *  And the functions U() and V() have separate coefficients, but are being
 *  generated from a common x,y->u,v  data set.</p>
 *
 *  <p>You can also use the 'vectors' to generate an inverse of the given 'matrix'
 *  though as a 'column first array' rather than a 'row first array'. For
 *  details see {@link http://en.wikipedia.org/wiki/Gauss-Jordan_elimination}</p>
 *
 * @memberOf lens.util.gaussJordanElimination
 *
 * @see {@link https://imagemagick.org/api/MagickCore/matrix_8c_source.html#l00480 GaussJordanElimination()} at
 * ImageMagick source.
 */
class Solver {

  /**
   *
   * @param {Array<number[]>} matrix Square matrix to be solved.
   * @param {Array<number[]>} vectors Augment results matrix.
   */
  constructor(matrix, vectors) {
    this.solved = false;
    this.matrix = matrix.map(row => row.slice());
    this.vectors = vectors.map(vector => vector.slice());
  }

  /**
   * Solves given matrix.
   *
   * @returns {lens.util.gaussJordanElimination.Solver}
   */
  solve() {
    if (this.solved) {
      return this;
    }

    this.validate();

    const matrix = this.matrix;
    const vectors = this.vectors;
    const rank = matrix.length;
    const numVectors = vectors.length;
    const cols = new Array(rank).fill(0);
    const rows = new Array(rank).fill(0);
    const pivots = new Array(rank).fill(0);
    let col = 0;
    let row = 0;

    for (let i = 0; i < rank; i++) {
      let max = 0;

      for (let j = 0; j < rank; j++) {
        if (pivots[j] != 1) {
          for (let k = 0; k < rank; k++) {
            if (pivots[k] != 0) {
              if (pivots[k] > 1) {
                unsolvable();
              }
            } else if (Math.abs(matrix[j][k]) >= max) {
              max = Math.abs(matrix[j][k]);
              row = j;
              col = k;
            }
          }
        }
      }

      pivots[col]++;

      if (row != col) {
        for (let k = 0; k < rank; k++) {
          swap(matrix, row, k, col, k);
        }

        for (let k = 0; k < numVectors; k++) {
          swap(vectors, k, row, k, col);
        }
      }

      rows[i] = row;
      cols[i] = col;

      if (matrix[col][col] == 0) {
        unsolvable();
      }

      let scale = perceptibleReciprocal(matrix[col][col]);
      matrix[col][col] = 1;

      for (let j = 0; j < rank; j++) {
        matrix[col][j] *= scale;
      }

      for (let j = 0; j < numVectors; j++) {
        vectors[j][col] *= scale;
      }

      for (let j = 0; j < rank; j++) {
        if (j != col) {
          let scale = matrix[j][col];
          matrix[j][col] = 0;

          for (let k = 0; k < rank; k++) {
            matrix[j][k] -= scale * matrix[col][k];
          }

          for (let k = 0; k < numVectors; k++) {
            vectors[k][j] -= scale * vectors[k][col];
          }
        }
      }
    }

    for (let j = rank - 1; j >= 0; j--) {
      if (cols[j] != rows[j]) {
        for (let i = 0; i < rank; i++) {
          swap(matrix, i, rows[j], i, cols[j]);
        }
      }
    }

    this.solved = true;

    return this;
  }

  /**
   * Returns augment matrix (results)
   *
   * @returns {Array.<number[]>}
   */
  getVectors() {
    return this.vectors.map(vector => vector.slice());
  }


  /**
   * Validates matrix and vectors.
   * @protected
   * @returns {lens.util.gaussJordanElimination.Solver}
   */
  validate() {
    const rank = this.matrix.length;

    this.matrix.forEach(row => {
      if (row.length !== rank) {
        throw new Error('Matrix must be square');
      }
    });

    this.vectors.forEach(vector => {
      if (vector.length !== rank) {
        throw new Error('Vectors must be the same length as matrix rank');
      }
    });

    return this;
  }
}

export default Solver;