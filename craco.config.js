const path=require("path")
const pxtorem = require('postcss-pxtorem')
const CracoLessPlugin = require('craco-less')

module.exports = {
  style: {
    postcss: {
      mode: 'extends',
      loaderOptions: {
        postcssOptions: {
          ident: 'postcss',
          plugins: [[
            pxtorem({
              rootValue: 135,//根据ui提供的效果图修改  看是1x还是2x
              propList: ['*'],
              minPixelValue: 3,
              exclude: /node_modules/i,
            })]],
        },
      },
    },
  },
  webpack: {
    alias: {
      // 使用 @ 表示 src 文件所在路径
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ]

};