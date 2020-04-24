const path = require("path");
const colors = require("colors");

const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

console.log(`Mode: ${process.env.NODE_ENV}`.rainbow);
let isDev = process.env.NODE_ENV === "development";

module.exports = {
    context: path.resolve(__dirname, "src"),
    resolve: {
        alias: {
            "@img": path.resolve(__dirname, "src/img"),
        }
    },
    entry: {
        main: "./js/index.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    devServer: {
        port: 4200,
        hot: isDev,
        // contentBase: "src",
        // watchContentBase: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev,
                            reloadAll: true,
                        }
                    },
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.(svg|jpg)$/,
                use: [
                    {
                        options: {
                            name: "[name].[ext]",
                            outputPath: "img",
                        },
                        loader: "file-loader",
                    }
                ],
            },
        ]
    }
}
