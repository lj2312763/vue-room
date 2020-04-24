module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: []
    }
  },
  devServer: {
    port: 8089,
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
