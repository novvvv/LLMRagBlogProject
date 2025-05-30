module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  plugins: [
    'vue',
    'vue/setup-compiler-macros'   // 이 플러그인 꼭 추가!
  ],
  rules: {
    'no-unused-vars': 'warn',
    'no-undef': 'off', // defineProps 관련 false positive 방지
  },
}
