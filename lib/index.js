/**
 * @namespace lens
 */

/**
 * Library version.
 *
 * @readonly
 * @memberOf lens
 * @type {string}
 */
const VERSION = '1.0.0';

export {default as distort} from './distort';

export {VERSION};

import * as distorter from './distorter';
export {distorter};

import * as distortion from './distortion';
export {distortion};

import * as exception from './exception';
export {exception};

import * as filter from './filter';
export {filter};

export {default as filterPresets} from './filter-presets';

import * as image from './image';
export {image};

import * as mixins from './mixins';
export {mixins};

import * as resampler from './resampler';
export {resampler};

import * as util from './util';
export {util};

import interpolation from './interpolation';
export {interpolation};

import vpx from './vpx';
export {vpx};

import Viewport from './viewport';
export {Viewport};

import distorts from './distorts';
export {distorts};

export {registerDistortionResolver, unregisterDistortionResolver} from './distorts';

export {
  EPSILON,
  MAXIMUM_VALUE,
  M_PI2,
  M_2PI
} from './constants';