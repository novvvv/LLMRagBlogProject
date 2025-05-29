<template>

  <div id="app">
 
  <!-- 2025.05.22 챗봇 추가 -->
  <div id="chatbot-app">
    <!-- 네비게이션 바 -->
    <nav class="navbar">
      <h2>ChatBot 🤖</h2>
    </nav>

    <!-- 채팅 창 -->
    <div class="chat-window">
      <div v-for="(msg, idx) in messages" :key="idx" class="chat-bubble" :class="msg.sender">
        <span>{{ msg.text }}</span>
      </div>
    </div>

    <!-- 입력창 -->
    <div class="input-area">
      <textarea v-model="month" @keyup.enter="sendMessage" placeholder="메시지를 입력하세요..."></textarea>
      <button @click="sendMessage">전송</button>
    </div>
  </div>
  <!-- 2025.05.22 챗봇 추가 -->

  <div>
      <div class="content">
        <br>
        <!-- <input @change=""> @change 입력하고 다른곳을 찍었을 때 자바스크립트 코드 실행 -->
        <!-- <input v-model="month"> -->
        <!-- 2025.05.21 사용자 입력 부분 -->
        <!-- <textarea v-model="month"></textarea>
        <p> 사용자 메시지 : {{ month }}</p> -->
        <!-- <h5>About Me</h5>
        <p>* 본 사이트는 한국의 일본어 학습자를 위해 제작된 페이지로 <span class="highlight">Spring Boot + Vue.js + RAG</span> 기술을 접목시켜 개발했습니다. *<br>
          * 컴퓨터 공학과 학부생의 산학과제 졸업 논문 프로젝트 용도로 제작되었으며, 관련 문의는 아래 연락처를 참고해 주세요 *</p>
        <p>@InstaGram - doil_01_<br>
        @Contact - novslog@gmail.com<br>
        @Blog - https://novlog.tistory.com/</p> -->
    </div>
  </div>
  
  <!-- <List :blog="blog"/>  -->
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
      messages: [
        { sender: 'bot', text: '안녕하세요! 일본어 챗봇 입니다. 무엇을 도와드릴까요?' }
      ]

    }
  },

  // methods code add 2025.05.22
  methods: {
    sendMessage() {
      const trimmed = this.month.trim();
      if (trimmed === '') return;

      // 사용자 메시지 추가
      this.messages.push({ sender: 'user', text: trimmed });

      // GPT 더미 응답
      this.messages.push({ sender: 'bot', text: `🧠 [응답] "${trimmed}"에 대한 처리를 시작합니다.` });

      this.month = '';
      
      // 스크롤 아래로 자동 이동
      this.$nextTick(() => {
        const chatWindow = this.$el.querySelector('.chat-window');
        chatWindow.scrollTop = chatWindow.scrollHeight;
      });
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
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
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

#chatbot-app {
  width: 100%; /* 💥 화면 전체 너비 */
  font-family: 'Segoe UI', sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.navbar {
  background-color: #2c3e50;
  color: white;
  padding: 15px;
  text-align: center;
  font-size: 1.4rem;
}

.chat-window {
  flex-grow: 1;
  padding: 15px;
  overflow-y: auto;
  background-color: #f0f0f0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  width: 100%;
}

.chat-bubble {
  width: 100%;
  padding: 10px 0;
  display: flex;
}

.chat-bubble.user {
  background-color: #d1ecf1;
  align-self: flex-end;
  text-align: right;
  margin-left: auto;
}

.chat-bubble.bot {
  background-color: #e2e3e5;
  align-self: flex-start;
  text-align: left;
  margin-right: auto;
}

.chat-bubble.bot span {
  background-color: #e0e0e0;
  padding: 12px 20px;
  border-radius: 10px;
  max-width: 100%;
  white-space: pre-wrap;
  width: 100%;
  text-align: left;
}


.chat-bubble.user span {
  background-color: #d1ecf1;
  padding: 12px 20px;
  border-radius: 10px;
  max-width: 100%;
  white-space: pre-wrap;
  width: 100%;
  text-align: left;
}

.input-area {
  display: flex;
  padding: 10px;
  background-color: #fff;
  border-top: 1px solid #ccc;
}

.input-area textarea {
  flex-grow: 1;
  resize: none;
  height: 50px;
  border-radius: 10px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
}

.input-area button {
  margin-left: 10px;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.input-area button:hover {
  background-color: #1c2833;
}
</style>
