const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require('./build-utils/loadPresets');

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  return merge(
    {
      mode,
      module: {
        rules: [
          {
            test: /\.jp?g$/,
            use: {
              loader: 'url-loader',
              options: {
                limit: 5000,
              },
            },
          },
        ],
      },
      output: {
        filename: 'bundle.js',
        chunkFilename: '[name].lazy-chunk.js',
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  );
};
