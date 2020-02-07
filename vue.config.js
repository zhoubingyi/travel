// vue.config.js
module.exports = {
    publicPath: '/',
    outputDir: 'dist', // 打包的目录
    lintOnSave: true, // 在保存时校验格式
    productionSourceMap: false, // 生产环境是否生成 SourceMap
    devServer: {
        open: true, // 启动服务后是否打开浏览器
        host: 'localhost',
        port: 8080, // 服务端口
        https: false,
        hotOnly: false,
        // proxy: { // 设置代理
        //         target: '/',
        //         // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        //         changeOrigin: true,
        //         ws: true,
        //         pathRewrite: {
        //             // 替换target中的请求地址，也就是说以后你在请求http://api.jisuapi.com/XXXXX这个地址的时候直接写成/api即可
        //             '^/api': '/'
        //         },
        //     },
        before: app => {}
    },
    configureWebpack: {
        externals: {
            'AMap': 'AMap' // 高德地图配置
        }
    }
}
