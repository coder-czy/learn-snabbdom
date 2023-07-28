const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  stats: 'minimal',
  devServer: {
    port: 8089,
    static: './public',
    open: true,
    hot: true,

  }
}