const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const extractSass = new ExtractTextPlugin({
    filename: "bundle.css",
    disable: process.env.NODE_ENV === "development"
});

const config = {
  entry: ['./index.js', './scss/main.scss'],
  output: {
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
        { 
          test: /\.js$/, 
          exclude: /node_modules/, 
          loader: "babel-loader" 
        },
        { 
          test: /\.scss$/,
          use: extractSass.extract({
                use: [{
                    loader: "css-loader", 
                    options: {
                      sourceMap: true
                    }
                }, {
                    loader: "sass-loader",
                    options: {
                      sourceMap: true
                    }
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
        }
    ]
  },
  plugins: [
    extractSass,
    new webpack.NamedModulesPlugin()
  ]
};

module.exports = config;