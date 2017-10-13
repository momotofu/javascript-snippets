const {resolve} = require('path')

module.exports = {
  entry: resolve(__dirname, 'src/main.js'),
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'bin')
  },
  context: resolve(__dirname, 'src'),
  module: {
    loaders: [{
      test: /\.js$/,
      loader: "babel",
      include: [
        resolve(__dirname, 'src')
      ],
      query: {
        presets: [ "es2015", "react", "react-hmre" ]
      }
    }]
  }
}
