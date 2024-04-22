

<script setup>
import { ref, computed } from 'vue'
import LoginForm from '/@mycomp/LoginForm.vue'
// import ComputedTodolist from '/@mycomp/ComputedTodolist.vue'


// const isActive = ref(true);
// const hasError = ref(false);
// const awesome = ref(true)

// function toggle() {
//   awesome.value = !awesome.value;
//   isActive.value = !isActive.value;
//   console.log("isActive", isActive);
//   // const aaa = document.querySelector("#aaa");
//   // if (isActive.value) {
//   //   aaa.classList.add("active");
//   // } else {
//   //   aaa.classList.remove("active");
//   // }
  
// }
// function errorToggle() {
//   hasError.value = !hasError.value;
//   // const aaa = document.querySelector("#aaa");
//   // if (hasError.value) {
//   //   aaa.classList.add("text-danger");
//   // } else {
//   //   aaa.classList.remove("text-danger");
//   // }

// }
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <LoginForm/>
   <!-- <ComputedTodolist/><br> -->
  <!-- <button @click="toggle">토글 버튼</button> -->
  <!-- <button @click="errorToggle">error 토글 버튼</button> -->
  <!-- <h1 v-if="awesome">Vue는 굉장해! 엄청나!</h1> -->
  <!-- <h1 v-else>오 안돼 😢</h1> -->
  <!-- div id="aaa" class="static">만세~~~</div -->
  <!-- <div class="static" :class="{active: isActive, 'text-danger' : hasError}">만세~~~</div>  -->
</template>

<!-- <style > -->
    <!-- .static {
        border:4px solid black;
        width:200px;
        height:200px;
    }
    .active {
        font-size: 50px;
    }
    .text-danger {
        background-color: red; 
        color:white;
        font-size:100px;
    }
</style> -->