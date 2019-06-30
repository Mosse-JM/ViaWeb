module.export = {
    entry: './dist/js/app.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module:{
        loaders:[
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.js$/, loader:'babel-loader', exclude: /node_modules/, query:{presets:['es2015']}}
        ]
    }
}