const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: { 
  port: 3000,
  historyApiFallback: true,
  static: path.resolve(__dirname, 'dist'),
},

  output: { publicPath: 'auto', path: path.resolve(__dirname, 'dist'), filename: '[name].js' },
  module: {
    rules: [
      { test: /\.js?$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-react'] } } }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        menu: 'menu@http://localhost:3001/remoteEntry.js',
        order: 'order@http://localhost:3002/remoteEntry.js'
      },
      shared: {
  react: { singleton: true, requiredVersion: '^18.0.0' },
  'react-dom': { singleton: true, requiredVersion: '^18.0.0' }
}

    }),
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ],
  resolve: { extensions: ['.js', '.jsx'] }
};
