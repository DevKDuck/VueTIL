<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <!-- <Step1/> -->
  
<Hello/>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Step1 from '/@mycomp/step1.vue'
import Hello from '/@mycomp/Hello.vue'
// import Hello from './components/Hello.vue'

export default {
  name: 'App',
  components: {
    Hello
  }
}
</script>
