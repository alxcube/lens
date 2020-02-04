# Lens

Lens is a standalone library for performing image distortions using
[reverse pixel mapping](https://www.imagemagick.org/Usage/distorts/#mapping)
with algorithms taken from [ImageMagick](https://imagemagick.org) core.
Following distortions are supported at the moment:

* Affine (using control points or affine matrix)
* Perspective (using control points or perspective matrix)

Lens can distort images in browser and in Node.js, but only browsers are supported
out of the box. If you want to use Lens in Node.js, you should implement ImageInterface
using your favorite image processing library — it's easy. (TODO: provide link to example of implementation) 

## Installation
### Using npm
```
npm i alxcube/lens
```
### Via `script` tag

```html
<script src="path-to-lens/lens.min.js"></script>
```

## Import

After Lens is installed, you can import it to your project:

### ES6 module
```javascript
import lens from 'alxcube/lens';
```

### CommonJS module
```javascript
let lens =  require('alxcube/lens');
```

### Global var

If you don't use modules, Lens is available in global namespace as `lens`