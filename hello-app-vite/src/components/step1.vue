<!-- 버튼에 맞춰 색깔이 변하도록 연습 -->

<script setup>
import { ref } from 'vue'

const titleClass = ref('titleRed')

function changedRed(){
    titleClass.value = 'titleRed';
}

function changedBlue(){
    titleClass.value = 'titleBlue';
}

function changedGreen(){
    titleClass.value = 'titleGreen';
}
</script>

<template>
  <h1 :class="titleClass">색깔 놀이</h1>

  <button @click="changedRed"> 빨강버튼 </button>
  <button @click="changedBlue"> 파랑버튼 </button>
  <button @click="changedGreen"> 초록버튼 </button>
</template>

<style>
.titleRed {
  color: red;
}

.titleBlue {
  color: blue;
}
.titleGreen {
  color: green;
}
</style>