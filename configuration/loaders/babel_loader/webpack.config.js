
let webpack = require('webpack');

module.exports = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env"]
                    }
                }
            }
        ]
        // loaders: [
        //     {
        //         loader: "babel-loader",
        //         query: {
        //             presets: ["es2015"]
        //         }
        //     }
        // ]
    }
}