import distorter from './distorter/distorter';
import distortion from './distortion/distortion';
import exception from './exception/exception';
import filter from './filter/filter-namespace';
import image from './image/image';
import mixins from './mixins/mixins';
import resampler from './resampler/resampler';
import util from './util/util-namespace';
import {EPSILON, MAXIMUM_VALUE, M_2PI, M_PI2} from './constants';
import distort from './distort';
import distorts from './distorts';
import {registerDistortionResolver, unregisterDistortionResolver} from './distorts';
import filterPresets from './filter-presets';
import interpolation from './interpolation';
import Viewport from './viewport';
import vpx from './vpx';

/**
 * Library version
 * @memberOf lens
 */
const VERSION = process.env.PACKAGE_VERSION;

/**
 * Lens library namespace
 *
 * @namespace lens
 */
const lens = {
  // Constants
  VERSION,
  EPSILON,
  MAXIMUM_VALUE,
  M_2PI,
  M_PI2,

  // Enums
  distorts,
  filterPresets,
  interpolation,
  vpx,

  // Types
  Viewport,

  // Namespaces
  distorter,
  distortion,
  exception,
  filter,
  image,
  mixins,
  resampler,
  util,

  // Functions
  distort,
  registerDistortionResolver,
  unregisterDistortionResolver
};

export default lens;