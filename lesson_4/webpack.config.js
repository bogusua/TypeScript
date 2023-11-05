const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, 'final'),
        filename: 'main.js',
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    optimization: {
        minimizer: [new TerserPlugin()],
    },
    devtool: 'source-map',
    devServer: {
        static: path.join(__dirname, 'final'),
        port: 8800,
    },
};
