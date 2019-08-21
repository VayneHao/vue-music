/*
 * @Author: haopeiwei
 * @Date: 2019-08-18 14:39:26
 * @LastEditors: hpw
 * @LastEditTime: 2019-08-21 17:53:59
 */
const path = require("path");

function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    port: 8091,
    open: true,
    proxy: {
      "/api/songList": {
        target: "https://u.y.qq.com/cgi-bin/musicu.fcg",
        changeOrigin: true,
        https: true,
        // ws: true,
        pathRewrite: { "^/api/songList": "" }
      },
      "/api/singerList": {
        target: "https://u.y.qq.com/cgi-bin/musicu.fcg",
        changeOrigin: true,
        https: true,
        // ws: true,
        pathRewrite: { "^/api/singerList": "" }
      }
    }
  },
  lintOnSave: true,
  configureWebpack: config => {
    config.resolve.extensions = [".js", ".vue", ".json", ".styl", ".ts", ".jsx", ".tsx"];
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("common", resolve("src/common"));
  }
};
