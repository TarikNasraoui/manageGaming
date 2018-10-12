import path from 'path';
import webpack from 'webpack';
export default {
    entry:  path.join(__dirname, '/client/index.js'),
    output: {
        path: '/',
    },
    module: {
        loaders: [
          {
            test: /\.js$/,
            include: [
                path.join(__dirname, 'client'),
            ],
            loaders: ['babel']
          }
        ]
    },
    resolve: {
        extentions: [ '', '.js' ]
    }
}