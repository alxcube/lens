import Viewport from "../viewport";

/**
 * Mixin for classes implementing {@link DistortionInterface} that can calculate best fit viewport using forward
 * pixel mapping of image corners.
 *
 * @memberOf lens.mixins
 * @mixin
 */
const createsBestFitViewportFromApexes = {
  /**
   * Returns best fit viewport for distortion, using forward mapping for image apexes (corners).
   *
   * @param {lens.Viewport} viewport
   * @returns {lens.Viewport}
   */
  getBestFitViewport(viewport) {
    const u1 = viewport.x1,
      v1 = viewport.y1,
      u2 = viewport.x2 + 1,
      v2 = viewport.y2 + 1,
      [x, y] = this.forwardMap(u1, v1),
      bestFit = new Viewport(x, y, x, y);

    [[u2, v1], [u2, v2], [u1, v2]].forEach(apex => bestFit.expand(...this.forwardMap(...apex)));

    bestFit.fixBounds();

    return bestFit;
  }
};

export default createsBestFitViewportFromApexes;