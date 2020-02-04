const presets = [
    [
        "@babel/env",
        {
            debug: true,
            targets: {
                ie: "9"
            },
            useBuiltIns: process.env.NODE_ENV === 'production' ? false : 'usage',
        },
    ],
];

module.exports = { presets };