const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\(\.jpg|\.png|\.gif$/, type:'asset/resource' },
        ]

    }
};

