const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.ts|jsx?$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: path.resolve('node_modules'),
      },
    ],
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
  resolve: {
    extensions: ['.ts', '.js', '.json', '.tsx'],
  },
});
