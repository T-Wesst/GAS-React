const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const appsScriptPlugin = require('gas-webpack-plugin');
const { merge } = require('webpack-merge');
const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require('./build-utils/loadPresets');

const destination = path.resolve(__dirname, 'dist');

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  return merge(
    {
      mode,
      entry: path.resolve(__dirname, './src/index.ts'),
      module: {
        rules: [],
      },
      output: {
        filename: 'bundle.js',
        path: destination,
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          inlineSource: '.(js|css)$',
          filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new webpack.ProgressPlugin(),
        new appsScriptPlugin(),
        new CopyPlugin({
          patterns: [{ from: 'appsscript.json', to: destination }],
        }),
      ],
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  );
};
