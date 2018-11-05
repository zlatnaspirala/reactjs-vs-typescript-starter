var path = require("path");

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
var plugins = [];

plugins.push(new HtmlWebpackPlugin({
  hash: true,
  template: './src/index.html',
  chunks: ['vendor', 'index'],
  filename: 'index.html',
  inject: 'body'
}));

plugins.push(new ExtractTextPlugin({
  filename: (getPath) => {
      return getPath('./css/global-style.css');
  },
  allChunks: true
}));

var publicPath = "build";
 
var config = {
  mode: 'development',
  entry: ["./src/index.tsx"],
  output: {
    path: path.resolve(__dirname, publicPath),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  watch: true,
  module: {
    rules: [
        {
            test: /\.tsx?$/,
            use: [
                {
                    loader: 'ts-loader'
                }
            ]
        },
        {
            test: /\.html$/,
            use: ['html-loader']
        },   
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                        }
                    }
                ]
            })
        } ,
        {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        outputPath: publicPath + '/assets/images'
                    }
                }
            ]
        },
        {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name(file) {
                            // create correct path within dist/ folder
                            var gamesPath = customConfig['gamesPath'];
                            result = file.replace(__dirname + gamesPath, '');
                            return result;
                        },
                        publicPath(file) {
                            return customConfig['baseUrl'] + file;
                        }
                    }
                }
            ]
        }
    ]
},
plugins: plugins

};

module.exports = config;
