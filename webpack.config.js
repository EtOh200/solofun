const path = require('path');

module.exports = {
  entry: path.resolve('./client/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js' 
  }, 
  mode: 'process.env.NODE_ENV',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',

        }
      },
      {
        test: /\.s[ac]ss$/i, 
        // /\.s?css$/ s is optional, and its looking at global search. 
        use: ['style-loader', 'css-loader', 'sass-loader'], 
      }
    ]
  }
}