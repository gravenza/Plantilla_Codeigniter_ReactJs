module.exports = {
    //entry: './src/index.jsx',
    entry: './src/index.js',
    output: {
        path: __dirname + '/public/js',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                //test: /\.jsx$/,
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            }
        ]
    },
    mode: 'production'
    //mode: 'development'
}