const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,    //关闭语法检查
  //方式一
  //开启代理服务器，这样写配置存在两个问题，首先是这种配置方式不能配置多个代理，其次不能控制是否走代理
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }
  //方式二
  devServer: {
    proxy: {
      '/car': {  //请求前缀
        target: 'http://localhost:5001',
        pathRewrite:{'^/car':''},
        ws: true,  //用于支持websocket
        changeOrigin: true  //用于控制请求头中的host值，一般为true，默认为true
      },
      '/student': {  //请求前缀
        target: 'http://localhost:5000',
        pathRewrite:{'^/student':''},
        ws: true,  //用于支持websocket
        changeOrigin: true  //用于控制请求头中的host值，一般为true，默认为true
      }
    }
  }
})
