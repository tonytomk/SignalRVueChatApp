const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    outputDir : process.env.NODE_ENV === 'production' ? './signalr-vue' : './signalr-vue',
    publicPath: '',
    filenameHashing: true,
    productionSourceMap: false,    
    devServer: {
        proxy: {'/signalr':  {target: 'https://localhost:5001',
        ws: true,
        changeOrigin: true},
    }
    },
    configureWebpack: {
        module: {
            rules: [
            ]
        },
        plugins: [
        ]
    }
}