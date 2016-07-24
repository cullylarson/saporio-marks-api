import gulp from 'gulp'
import webpack from 'webpack'
import gutil from 'gulp-util'
import path from 'path'
import nodeExternals from 'webpack-node-externals'

const taskJs = (entryJs, destDir, destFilename, enableMaps) => (done) => {
    const nodeEnv = enableMaps ? "development" : "production"

    webpack({
        entry: entryJs,
        target: 'node',
        externals: [nodeExternals()], // ignores modules in node_modules
        output: {
            path: destDir,
            filename: destFilename,
        },
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel',
                    exclude: [/node_modules/],
                },
            ],
            preLoaders: [
                {
                    test: /\.jsx?$/,
                    loader: 'eslint-loader',
                    exclude: [/node_modules/],
                },
            ]
        },
        devtool: enableMaps ? 'source-map' : '',
        plugins: [
            //new webpack.optimize.UglifyJsPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': nodeEnv,
                }
            }),
        ],
    }, (err, stats) => {
       if(err) throw new gutil.PluginError("webpack", err)
       gutil.log("[webpack]", stats.toString({ }))
       done()
    })
}

export {taskJs}
