var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                include: [
                    path.join(__dirname, 'src'),
                    path.join(__dirname, 'node_modules/bootstrap/dist'),
                    path.join(__dirname, 'node_modules/jquery/dist'),
                ]
            },
            {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
    }
};
