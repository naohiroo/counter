const path = require('path')
//vue loader pluginを使う
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  //entry point
  entry: './src/index.js',
  output: {
    //output directory
    path: path.resolve(__dirname, './dist'),
    //output filename
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/, //if file name ends .vue
        loader: 'vue-loader' //use vue-loader
      },
      {
        test: /\.js$/, //if file name ends .js
        loader: 'babel-loader' //sue babel-loader
      },
      {
        test: /\.css$/, //if file name ends .css
        loader: ['vue-style-loader', 'css-loader'] //use css-loader --> vue-style-loader
      }
    ]
  },
  resolve: {
    // abbreviation for file extension.
    extensions: ['.js', '.vue'],
    alias: {
      // use vue-template-compiler
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin(
      [
        {
          from: './public'
        }
      ]
    )
  ],
  devServer: {
    //the directory which has unneccesary file for webpack. (HTML, images, ..)
    contentBase: path.resolve(__dirname, 'public')
  }
}