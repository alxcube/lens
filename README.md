# Lens

## Introduction

Lens is pure javascript library for image distortions using algorithms from [ImageMagick](https://imagemagick.org).

It can be used in all browsers that support HTML5 canvas and in Node.js. While browsers usage supported out of the box,
you will need some third party library that provides pixel manipulation to use Lens in Node.

If you are familiar with ImageMagick distortions, it will be very easy for you to use Lens.

## Features

* Distortions:
    * Affine
    * Perspective
    * Arc
* Resampling:
    * Elliptical Weighted Average resampling
    * Supersampling
    * Interpolated color lookup
* Re-sampling filters
* Virtual Pixels support

## Documentation

Detailed documentation is available [here](https://alxcube.github.io/lens/docs/index.html)

## Browser support

Lens supports all browsers that support HTML5 canvas pixel manipulations using [ImageData](https://developer.mozilla.org/en-US/docs/Web/API/ImageData)
object. However, Lens uses some ES2015 features that you may need to polyfill:
* Promise
* Object.assign()
* Array.fill()
* Math.hypot()

There also may be some limitations on image size depending on browser.

## Node.js

To use Lens in Node.js you need some image processing library.
You can use [Jimp](https://www.npmjs.com/package/jimp) with [Lens Jimp adapter](https://www.npmjs.com/package/@alxcube/lens-jimp).

## Semver

Lens have no tests specified at the moment, so it stays at version 0.
Until it reaches a 1.0 release, breaking changes will be released with a new minor version.

## Future work

* Write tests
* Implement other ImageMagick distortions:
    * Bilinear (forward and reverse)
    * Polynomial
    * Polar
    * DePolar
    * Barrel
    * BarrelInverse
    * Cylinder To Plane
    * Plane To Cylinder
    * Shepards
* Add more re-sample filter functions and filter presets
* Add more interpolation methods
* Add more virtual pixel methods
* Implement image resizing using ImageMagick algorithms and filters
    