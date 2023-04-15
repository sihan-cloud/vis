module.exports = {
  //assetsDir: 'public', //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  //publicPath: '/', //部署应用包时的基本 URL。  
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true, //是否跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    host: 'localhost', //
    port: 8080, //
  },
}


