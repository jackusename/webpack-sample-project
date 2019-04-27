module.exports = {
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    devtool: "eval-source-map",
    devServer: {
        contentBase: "./public",
        port: "8089",
        historyApiFallback: true,
        inline: true
    }
};