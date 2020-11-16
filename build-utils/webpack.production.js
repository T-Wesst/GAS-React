const miniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = (env) => ({
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [miniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [new miniCssExtractPlugin()],
});
