<template>
  
    <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">ChatBot</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">List</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Lecture</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Service</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/write">
        <img src="@/assets/feather-pen.png" alt="글 작성" style="height: 20px; vertical-align: middle;" />
      </a>
    </li>
  </ul>
  <div id="app">
  <div>
      <div class="content">
        <br>
        <!-- <input @change=""> @change 입력하고 다른곳을 찍었을 때 자바스크립트 코드 실행 -->
        <!-- <input v-model="month"> -->
         <textarea v-model="month"></textarea>
        <p> 사용자 메시지 : {{ month }}</p>
        <h5>About Me</h5>
        <p>* 본 사이트는 한국의 일본어 학습자를 위해 제작된 페이지로 <span class="highlight">Spring Boot + Vue.js + RAG</span> 기술을 접목시켜 개발했습니다. *<br>
          * 컴퓨터 공학과 학부생의 산학과제 졸업 논문 프로젝트 용도로 제작되었으며, 관련 문의는 아래 연락처를 참고해 주세요 *</p>
        <p>@InstaGram - doil_01_<br>
        @Contact - novslog@gmail.com<br>
        @Blog - https://novlog.tistory.com/</p>
    </div>
  </div>
  
  <!-- <List :blog="blog"/>  -->

  <!-- 1. 데이터를 Props로 전송 -->
</div>




</template>

<script>
// import List from './components/List.vue';
import blog from './assets/blog.js';

export default {
  name: 'App',
  data() {
    return {
      
      month : '',
      blog : blog,

    }
  },

  props : {
  
  },
  components: {
    // List,
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;

  /* 화면 크기에 맞춰서 중앙 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* 형광펜 효과 */
.highlight {
  background-color: rgba(173, 216, 230, 0.5); 
  padding: 2px 4px;
  border-radius: 4px;
}

/* 모든 네비게이션 링크 검은색으로 변경 */
.nav-link {
  color: black !important;
}
</style>
