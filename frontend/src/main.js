import { createApp } from 'vue'
import { createPinia } from 'pinia' // 상태관리 라이브러리

import App from './App.vue'
import router from './router'

/* UI Component */
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-blue/theme.css';  // ✅ 테마 CSS
import 'primevue/resources/primevue.min.css';           // ✅ PrimeVue 컴포넌트 기본 CSS
import 'primeicons/primeicons.css';                      // ✅ 아이콘 CSS
import 'primeflex/primeflex.css';                        // ✅ 유틸리티 클래스
/* */

/* Button Component */
import Button from 'primevue/button';

const app = createApp(App) // #App.vue를 기반으로 Vue 애플리케이션 인스턴스 생성

app.use(PrimeVue, { unstyled: true });
app.use(createPinia())
app.use(router)

app.component('BaseButton', Button);

app.mount('#app')
