const path = require('path');

module.exports  = env => {
    const minify    = env && env.minify;

    const config    = {
        entry: './lib/index.js',
        mode: minify ? 'production' : 'development',
        devtool: minify ? 'source-map' : 'inline-source-map',
        output: {
            filename: 'lens' + (minify ? '.min' : '') + '.js',
            path: path.resolve(__dirname, 'dist'),
            library: 'lens',
            libraryTarget: 'umd',
            globalObject: 'this'
        },
        optimization: {
            minimize: !!minify
        },
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/env',
                                    {
                                        debug: false,
                                        targets: {
                                            'ie': '9'
                                        },
                                        useBuiltIns: false
                                    }
                                ]
                            ]
                        }
                    }
                }
            ]
        }
    };

    return config;
};