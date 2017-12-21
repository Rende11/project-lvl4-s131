import path from 'path';
import webpack from 'webpack';

export default () => ({
  entry: {
    app: ['./src/client/'],
    vendor: ['babel-polyfill', 'jquery', 'jquery-ujs', 'popper.js', 'bootstrap'],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public', 'assets'),
    publicPath: '/assets/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
    }),
    new webpack.optimize.CommonsChunkPlugin({
      // This name 'vendor' ties into the entry definition
      name: 'vendor',
      // We don't want the default vendor.js name
      filename: 'vendor.js',
      // Passing Infinity just creates the commons chunk, but moves no modules into it.
      // In other words, we only put what's in the vendor entry definition in vendor-bundle.js
      minChunks: Infinity,
    }),
  ],
});
