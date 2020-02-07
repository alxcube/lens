import Filter from './filter/filter';
import {box, cubicBC} from "./filter/filter-functions";

/**
 * Filter factory.
 *
 * @callback lens~filterFactory
 * @returns {FilterInterface}
 */

/**
 * @private
 * @returns {lens.filter.Filter}
 * @constructor
 */
function ROBIDOUX() {
  return new Filter(
    cubicBC(0.37821575509399867, 0.31089212245300067),
    box(),
    2,
    1.1685777620836932,
    1
  );
}

/**
 * @private
 * @returns {lens.filter.Filter}
 * @constructor
 */
function ROBIDOUX_SHARP() {
  return new Filter(
    cubicBC(0.2620145123990142, 0.3689927438004929),
    box(),
    2,
    1.105822933719019,
    1
  );
}

/**
 * Filter presets.
 *
 * @enum {lens~filterFactory}
 * @memberOf lens
 */
const filterPresets = {
  ROBIDOUX,
  ROBIDOUX_SHARP
};

// TODO add more filter presets

export default filterPresets;