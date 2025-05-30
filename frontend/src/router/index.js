import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SearchView from '@/views/SearchView.vue'
import ArchiveView from '@/views/ArchiveView.vue'
import TagView from '@/views/TagView.vue' 

const router = createRouter({
  
  // HTML5 History API를 이용해 # 없이 URL 관리
  // http://example.com/#/about ← ❌ hash 모드
  // http://example.com/about ← ✅ history 모드
  // BASE URL을 meta.env.BASE_URL로 설정 vue.config.js 내부에 설정된 경로
  // BASE URL이란? Vue 앱이 브라우저에서 실행될 때, 정적 파일들(CSS, JS 등)을 어디에서 로드할지를 결정하는 경로
  // 로컬 개발에서는 npm run server가 기본적으로 경로가 /로 고정되기에 상관없으나
  // 메인 도메인이 아닌 하위 경로 (디렉토리) ex) base:'/my-app/;
  // or /my-app/index.html ... 등에서 배포할때는 문제가 발생할 수 있음

  // 즉, Vue Router에게 어디를 기준으로 URL을 해석할지 기준을 정해준다. 
  history: createWebHistory(), //?
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/archive',
      name: 'archive',
      component: ArchiveView
    },
    {
      path: '/tag',
      name: 'tag',
      component: TagView
    },
  ]
})

export default router
