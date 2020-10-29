const path = require('path');

module.exports = {
  entry: path.resolve('./client/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js' 
  }, 
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        //looks for js and jsx code. 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], 
            //transpile es6 code.
          }
        }
      },
      {
        test: /\.s[ac]ss$/i, 
        // /\.s?css$/ s is optional, and its looking at global search. 
        use: ['style-loader', 'css-loader', 'sass-loader'], 
      }
    ]
  },
  devServer: {
    publicPath: '/build',
    historyApiFallback: true,
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000/',
        secure: false,
      },
      '/assets/**': {
        target: 'http://localhost:3000/',
        secure: false,
      },
    },
   
  }
} 