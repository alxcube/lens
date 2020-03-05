const path = require('path');

const webpack = require('webpack');

const packageInfo = require('./package.json');


module.exports  = env => {
    const minify    = env && env.minify;

    const config    = {
        context: path.resolve(__dirname),
        entry: './lib/lens.js',
        mode: minify ? 'production' : 'development',
        devtool: minify ? 'source-map' : 'inline-source-map',
        output: {
            filename: 'lens' + (minify ? '.min' : '') + '.js',
            path: path.resolve(__dirname, 'dist'),
            library: 'lens',
            libraryTarget: 'umd',
            globalObject: 'this',
            libraryExport: 'default'
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
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    PACKAGE_VERSION: JSON.stringify(packageInfo.version)
                }
            }),
            new webpack.BannerPlugin({
                banner: `${packageInfo.name} ${packageInfo.version}\n© 2020 ${packageInfo.author}\nLicense: ${packageInfo.license}`
            })
        ]
    };

    return config;
};