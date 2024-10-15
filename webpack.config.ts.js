const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');

module.exports = webpackConfigTs = {
    mode: 'production',
    entry: {
        "tbsgrid-configs": path.resolve(__dirname, 'src/tbs.grid.configs.ts'),
        "tbsgrid": path.resolve(__dirname, 'src/tbs.grid.ts'),
        "tbsgrid.min": path.resolve(__dirname, 'src/tbs.grid.ts'),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: false,
        libraryTarget: "umd",
        //library: 'tbs-grid',
        //globalObject: 'this',
        environment: {
            arrowFunction: false,
            bigIntLiteral: false,
            const: false,
            destructuring: false,
            dynamicImport: false,
            forOf: false,
            module: false,
            optionalChaining: false,
            templateLiteral: false
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
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
    externals: {
        xlsx: {
            commonjs: 'xlsx',
            commonjs2: 'xlsx',
            amd: 'xlsx',
            root: 'XLSX',
        },
        saveAs: 'file-saver'
    },
    plugins: [
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
//const commonConfig = require('./webpack.config.common.js');
//module.exports = merge(commonConfig, webpackConfigTs);