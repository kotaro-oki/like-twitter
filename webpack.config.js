// このpathモジュールは、ファイルとディレクトリのパスを操作するためのユーティリティを提供します
const path = require('path');

module.exports = {
    // 最初に読み込むファイルを指定します。 ここで指定されたファイルから別のファイルを読み込む処理が書かれていると、webpack はそれらのファイルも自動的に読み込んで、最終的に1つのファイルとして出力してくれます。
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    // 拡張子を省略してインポートできるようにしているだけ、デフォルトでjsは入っていうr
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    output: {
        path: __dirname,
        filename: 'index.js',
        publicPath: '/'
    }
}