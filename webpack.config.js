const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // awesome, I need to check this late
const CleanWebpackPlugin = require('clean-webpack-plugin'); // Check webpack-manifest-plugin to better manipulation
 
module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "dist")
    },
    mode: "development"
};
