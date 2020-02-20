function preloadImage(src) {
    return new Promise(function (resolve, reject) {
        var img = new Image;

        img.onload = function () {
            resolve(img);
        };

        img.onerror = function () {
            reject(new Error('Image loading error'));
        };

        img.src = src;
    });
}

function makeCanvasImage(img) {
    var canvas  = document.createElement('canvas');
    canvas.width    = img.width;
    canvas.height   = img.height;
    canvas.getContext('2d').drawImage(img, 0, 0);
    return canvas;
}

// from https://gist.github.com/doctyper/992342
function desaturate(canvas) {
    var ctx     = canvas.getContext('2d');
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    for (y = 0; y < canvas.height; y++) {
        for (x = 0; x < canvas.width; x++) {
            i = (y * canvas.width + x) * 4;

            // Apply Monochrome level across all channels:
            imgData.data[i] = imgData.data[i + 1] = imgData.data[i + 2] = RGBtoGRAYSCALE(imgData.data[i], imgData.data[i + 1], imgData.data[i + 2]);
        }
    }

    ctx.putImageData(imgData, 0, 0);

    return canvas;
};

// from https://gist.github.com/doctyper/992342
function RGBtoGRAYSCALE (r, g, b) {
    // Returns single monochrome figure:
    return parseInt((0.2125 * r) + (0.7154 * g) + (0.0721 * b), 10);
};