const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode:"development",
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: '[name][ext]'
  },
  devServer:{
     static:{
        directory:path.resolve(__dirname, 'dist')
     },
     port:3000,
     open:true,
     hot:true,
     compress:true,
     historyApiFallback:true,
  },
  module:{
    rules:[
        {
            test:/\.scss$/,
            use:[
               'style-loader',
               'css-loader',
               'sass-loader' 
            ]
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
    ]

  },
  plugins:[
    new HtmlWebpackPlugin({
        title:'Webpack App',
        filename: 'index.html',
        template: 'src/index.html',
    })
  ]
  
};