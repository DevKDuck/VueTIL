<template lang="">
    <div>
        <h1>{{state.count}}</h1>
        <button @click="increment">클릭</button>
    </div>
</template>
<script>
import { reactive } from 'vue'

export default {
    setup() {
    const state = reactive({ count: 0 })

    // 상태를 템플릿에 노출
    return {
      state,
      increment : function () {
        state.count++;
      }
    }
  }
}
</script>
<style lang="">
    
</style>