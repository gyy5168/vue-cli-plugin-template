module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_DOMAIN, // 相对路径、CDN路径
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: process.env.NODE_ENV !== 'production',
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 1 }))
  },
  css: {
    extract: true,
    sourceMap: process.env.NODE_ENV !== 'production',
    modules: false
  },
  // 在多核机器下会默认开启
  parallel: require('os').cpus().length > 1,
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hot: true,
    open: true
  }
}
