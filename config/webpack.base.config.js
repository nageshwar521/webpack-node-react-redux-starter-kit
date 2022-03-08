const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Set APP_DIR
const APP_DIR = path.resolve(__dirname, '../src');

module.exports = (env) => {
  const { PLATFORM, VERSION } = env;
  return merge([
    {
      node: { fs: 'empty' },
      entry: ['@babel/polyfill', APP_DIR],
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
              },
            },
          },
          {
            test: /\.s?css$/,
            use: [
              PLATFORM === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
              'css-loader',
              'sass-loader',
            ],
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
          {
            test: /\.(jpg|png|gif|jpeg)$/,
            use: {
              loader: 'url-loader',
              options: {
                limit: 65000,
              },
            },
            exclude: /node_modules/,
          },
          {
            type: 'javascript/auto',
            test: /\.json/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'file-loader',
                options: { name: '[name].[ext]' },
              },
            ],
          },
          {
            test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                },
              },
            ],
          },
        ],
      },
      resolve: {
        alias: {
          images: path.resolve(__dirname, '../src/assets/images/'),
          '@root': path.resolve(__dirname, '../'),
          '@src': path.resolve(__dirname, '../src/'),
          '@locale': path.resolve(__dirname, '../src/locale/'),
          '@pages': path.resolve(__dirname, '../src/pages/'),
          '@components': path.resolve(__dirname, '../src/components/'),
          '@config': path.resolve(__dirname, '../src/config/'),
          '@common': path.resolve(__dirname, '../src/common/'),
          '@store': path.resolve(__dirname, '../src/store/'),
          '@utils': path.resolve(__dirname, '../src/utils/'),
          '@assets': path.resolve(__dirname, '../src/assets/'),
        },
        extensions: ['.js', '.jsx', '.css', '.png', '.jpg', '.gif', '.jpeg'],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: './index.html',
        }),
        new webpack.DefinePlugin({
          'process.env.VERSION': JSON.stringify(env.VERSION),
          'process.env.PLATFORM': JSON.stringify(env.PLATFORM),
        }),
        new CopyWebpackPlugin([{ from: './src/assets/images', to: 'images' }]),
      ],
    },
  ]);
};
