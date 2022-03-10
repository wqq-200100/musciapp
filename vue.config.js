const path = require('path')
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        views: '@/views',
        common:'@/common',
        components:'@/components',
        network:'@/network',
      }
    }
  }
}
