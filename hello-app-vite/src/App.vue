<template>
  <div>
    <router-view />
  </div>
</template>

<script setup>

</script>

<style>
</style>

<!-- <script setup>
import { ref } from 'vue'
import BlogPost1 from '/@mycomp/BlogPost1.vue'
import BlogPost2 from '/@mycomp/BlogPost2.vue'
const list = ref([
  {id : 1, title: "블로그 제목" },
  {id : 2, title: "네이버 블로그 제목"},
  {id : 3, title: "MSA2024 만세"}
]);

const fontSize = ref(10);

function onZoomIn(param) {
  fontSize.value++;
} 

function onZoomOut(param) {
  fontSize.value--;
} 

function onFontSizeChange() {
  //
  if (arguments.length == 0) {
    console.log("인자 없음");
  } else if (arguments.length == 1) {
    if (typeof arguments[0].length == 'undefined') {
      console.log("연관 배열 -> ", arguments[0]);
      fontSize.value = arguments[0].fontSize;
    } else if (arguments[0].length != 0) {
      fontSize.value = arguments[0][0];
      console.log("1건 자료 -> ", arguments[0]);
    }
  } else {
    console.log("색인 배열 -> ", arguments);
    fontSize.value = arguments[0];
  }

  console.log("onFontSizeChange().... ");
}
</script> -->

<!-- <template>
  <h1>내가 부모임( {{fontSize}} )</h1>
  <BlogPost1 v-for="item in list" :key="item.id" :id="item.id" :title="item.title" :fontSize="fontSize"
  @zoomIn="onZoomIn"
  @zoomOut="onZoomOut"
  />
  <hr/>
  <BlogPost2 v-for="item in list" :key="item.id" :id="item.id" :title="item.title" :fontSize="fontSize"
  @zoomIn="onZoomIn"
  @zoomOut="onZoomOut"
  />
</template> -->

<!-- <style >
</style> -->

<!-- <script setup> -->
// import { ref, computed } from 'vue'
// import LoginForm from '/@mycomp/LoginForm.vue'
// import WatchFuncTest from '/@mycomp/WatchFuncTest.vue'
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
<!-- </script> -->

<!-- <template> -->
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
<!-- <WatchFuncTest/> -->
  <!-- <LoginForm/> -->
   <!-- <ComputedTodolist/><br> -->
  <!-- <button @click="toggle">토글 버튼</button> -->
  <!-- <button @click="errorToggle">error 토글 버튼</button> -->
  <!-- <h1 v-if="awesome">Vue는 굉장해! 엄청나!</h1> -->
  <!-- <h1 v-else>오 안돼 😢</h1> -->
  <!-- div id="aaa" class="static">만세~~~</div -->
  <!-- <div class="static" :class="{active: isActive, 'text-danger' : hasError}">만세~~~</div>  -->
<!-- </template> -->

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