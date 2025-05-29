<script setup>
    import { RouterView } from 'vue-router'
    import NavBar from './components/NavBar.vue'
</script>

<template>

  <div style="background-color: var(--blue-50); height: 200px; width: 100%;"> 
    <NavBar/>
    <RouterView/>
  </div>
</template>

<style></style>