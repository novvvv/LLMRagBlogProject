module.exports = {
  outputDir: "../src/main/resources/static",
  devServer: {
    proxy: {
      '/api': {
        // '/api' 로 들어오면 포트 8081로 보낸다.
        target: 'http://localhost:8081',
        changeOrigin: true // cross origin 허용
      }
    }
  },
  transpileDependencies: [],
}