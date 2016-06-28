const {resolve} = require('path')

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'bin')
  },
  context: resolve(__dirname, 'src'),
  devServer: {
    inline: true,
    port: 9000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: [
          resolve(__dirname, 'node_modules')
        ],
        include: [
          resolve(__dirname, 'src')
        ],
        query: {
          presets: ['es2015', 'react']
        }
      },
      {test: /\.css$/, loader: 'style!css'}
    ]
  },
  node: {
    fs: "empty"
  }
}
