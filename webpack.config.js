const path = require('path')

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
			{ 
				test: /\.css$/, 
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
				]
			},
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=[name].[ext]']
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/',
    filename: 'index.min.js'
  },
}