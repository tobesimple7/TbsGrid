const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    mode: 'production',
    entry: {
        "tbs-grid-configs": path.resolve(__dirname, 'src/tbs.grid.configs.js'),
        "tbs-grid": path.resolve(__dirname, 'src/tbs.grid.js'),
        "tbs-grid.min": path.resolve(__dirname, 'src/tbs.grid.js'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: "umd",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['', '.js'],
        alias: {
            'tbsGridNames': path.resolve(__dirname, './src/tbs.grid.names'),
            'tbsGridTypes': path.resolve(__dirname, './src/tbs.grid.types')
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            'tbsGridNames': 'tbsGridNames',
            'tbsGridTypes': 'tbsGridTypes',
        }),
        new MiniCssExtractPlugin({
            linkType: false,
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            title: 'Output Management',
        }),
    ],
    optimization: {
        concatenateModules: false,
        minimize: true,
        minimizer: [new TerserJSPlugin({
            terserOptions: {
                keep_classnames: true,
                keep_fnames: true,
            },
            include: /\.min\.js$/
        })]
    }
}