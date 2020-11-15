const miniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = (env) => ({
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
