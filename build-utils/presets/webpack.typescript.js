const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = () => ({
  module: {
    rules: [
      { test: /\.ts|jsx?$/, use: 'babel-loader', exclude: 'node_modules' },
    ],
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
  resolve: {
    extensions: ['.ts', '.js', '.json', '.tsx'],
  },
});
