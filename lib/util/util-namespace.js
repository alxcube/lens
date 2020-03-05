import * as utils from './util';
import gaussJordanElimination from './gauss-jordan-elimination/gauss-jordan-elimination';

/**
 * Utility functions namespace
 *
 * @namespace lens.util
 */
const util = {
  ...utils,
  gaussJordanElimination
};

export default util;