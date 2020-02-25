const path = require('path')

module.exports = {
  //entry point
  entry: './src/index.js',
  output: {
    //output directory
    path: path.resolve(__dirname, './dest'),
    //output filename
    filename: 'bundle.js'
  },
  devServer: {
    //the directory which has unneccesary file for webpack. (HTML, images, ..)
    contentBase: path.resolve(__dirname, 'public')
  }
}