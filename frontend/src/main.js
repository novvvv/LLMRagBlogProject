import { createApp } from 'vue'
import { createPinia } from 'pinia' // 상태관리 라이브러리

import App from './App.vue'
import router from './router'

/* UI Component */
import PrimeVue from 'primevue/config';

import 'primeflex/primeflex.css';                        // ✅ PrimeFlex 유틸리티
import 'primevue/resources/themes/lara-light-blue/theme.css';  // ✅ PrimeVue 테마
import 'primevue/resources/primevue.min.css';           // ✅ PrimeVue 기본 CSS
import 'primeicons/primeicons.css';       
/* */

/* Button Component */
import Button from 'primevue/button';

const app = createApp(App) // #App.vue를 기반으로 Vue 애플리케이션 인스턴스 생성

// app.use(PrimeVue, { unstyled: true });
app.use(PrimeVue);

app.use(createPinia())
app.use(router)

app.component('BaseButton', Button);

app.mount('#app')
