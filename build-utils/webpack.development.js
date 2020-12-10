const webpack = require('webpack');
module.exports = (env) => ({
  devtool: 'cheap-module-source-map',
  module: {
    rules: [],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
});
