const path = require('path');

const production    = process.env.NODE_ENV === 'production';

const config        = {
    entry:              './lib/index.js',
    mode:               production ? 'production' : 'development',
    devtool:            production ? 'source-map' : 'inline-source-map',
    output:             {
        filename:           'lens' + (production ? '.min' : '') + '.js',
        path:               path.resolve(__dirname, 'dist'),
        library:            'lens',
        libraryTarget:      'umd',
        globalObject:       'this'
    },
    optimization: {
        minimize: production
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};

module.exports  = config;