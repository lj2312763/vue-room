module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: []
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://jjh.dazyun.cn/',
        changeOrigin: true,  //是否跨域
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
}
