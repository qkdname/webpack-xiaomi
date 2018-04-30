const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './src/js/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test:/\.art$/,
        use:['art-template-loader']
      }
    ]
  },
  resolve:{
    alias:{
      views:path.resolve(__dirname,'src/views'),
      images:path.resolve(__dirname,'src/images'),
      jqueryVendor$:path.resolve(__dirname,'src/js/lib/jquery-vendor.js')
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: '小米',
      template: './src/index.html'
    }),
    new ExtractTextPlugin("styles.css"),
  ]
}