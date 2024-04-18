<template>
    <div>
        <h1>{{state.count}}</h1>
        <button @click="increment">증가</button>
        <button @click="decrement">감소</button>
    </div>
</template>
<script setup>
import { reactive } from 'vue'
   const state = reactive({ count: 0 })
   const increment = () => {
    state.count++;
   }

   const decrement = () => {
    state.count--;
   }
</script>