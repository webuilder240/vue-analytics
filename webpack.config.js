var webpack = require('webpack')
module.exports = {
  entry: './src/index.js',
  output: {
    path: './build',
    publicPath: '/build',
    filename: 'build.js'
  },
  devtool: 'source-map',
  module: {
    // preLoaders: [{
    //   test: /\.js$/,
    //   exclude: /node_modules/,
    //   loader: 'eslint-loader'
    // }],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules|vue\/dist/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }]
  }
  // devServer: {
  //   contentBase: './',
  //   port: 8080,
  //   hot: true,
  //   inline: true
  // },
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin()
  // ]
}
