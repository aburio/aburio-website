const path = require('path');
const webpack = require('webpack');
const TerserJSPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserJSPlugin(),
            new CssMinimizerPlugin(),
        ]
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader'
            ]
          }
        ]
      },
    devtool: 'inline-source-map',
    devServer: {
        static: './src',
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Arthur Burnichon - Tech Product Manager',
            template: './src/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: './src/assets/robots/',
                to: ''
            }]
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: './src/assets/favicon/',
                to: ''
            }]
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from:'./src/assets/media',
                to: 'assets'
            }]
        })
    ]
};