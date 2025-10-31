const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: { port: 3002, historyApiFallback: true },
  output: { publicPath: 'auto', path: path.resolve(__dirname, 'dist'), filename: '[name].js' },
  module: {
    rules: [
      { test: /\.js?$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-react'] } } }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'order',
      filename: 'remoteEntry.js',
      exposes: { './OrderApp': './src/OrderApp.js' },
      shared: {
  react: { singleton: true, requiredVersion: '^18.0.0' },
  'react-dom': { singleton: true, requiredVersion: '^18.0.0' }
}

    }),
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ],
  resolve: { extensions: ['.js', '.jsx'] }
};
