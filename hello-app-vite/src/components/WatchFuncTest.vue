<script setup>
import { ref, watch } from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const imageUrl = ref('')

watch(question, async (newQuestion) => {
  if (newQuestion.indexOf('?') > -1) {
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      const data = await res.json()
      
      answer.value = data.answer
      imageUrl.value = data.image
      
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
      imageUrl.value = 'Error! Could not reach the API. ' + error

    }
  }
})
</script>

<template>
  <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>
  
    <img :src="imageUrl"> 
  
</template>