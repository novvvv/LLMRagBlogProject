module.exports = {
  outputDir: "../src/main/resources/static", // 결과물이 저장되는 장소 - 스프링 정적 디렉토리 
  devServer: {
    proxy: {
      // npm run serve, /api로 시작하는 요청을 모두 8081포트로 프록시
      '/api': {
        // '/api' 로 들어오면 포트 8081로 보낸다.
        target: 'http://localhost:8081',
        changeOrigin: true // cross origin 허용
      }
    }
  },
  transpileDependencies: [],
}

