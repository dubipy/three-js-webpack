const path = require('path') //path를 가져온다

module.exports = { //module exports 부분에
  mode: 'production',
  entry: './src/index.js', //src/index.js를 어떻게 내보낼 것인가?
  output: {
    path: path.resolve(__dirname, 'public'), //public 폴더 안에다가
    filename: 'bundle.js', // bundle.js를 변환을 시켜준다는 의미
  },
  performance: {
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000
  },
  devServer: {
    publicPath: '/public/',
    compress: true,
    port: 9000,
    hot: true,
  },
}
