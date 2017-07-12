var webpack = require('webpack')

module.exports = {
    entry:"./webpack-project/index.js",
    output:{
        path:__dirname+"/dist",
        filename:"bundle.js",
        sourceMapFilename:'bundle.map'
    },
    devtool:'#source-map',
    module:{
        rules:[{
            test:/\.js$/,
            exclude:/(node_modules)/,
            loader:'babel-loader',
            query:{
                presets:['env','stage-0','react']
            }
        },{
            test:/\.css$/,
            use:['style-loader','css-loader',{
                loader:'postcss-loader',
                options:{
                    plugins:()=>[require('autoprefixer')]
                }
            }]
        }]
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            sourceMap:true,
            warning:false,
            mangle:true
        })
    ]
}
