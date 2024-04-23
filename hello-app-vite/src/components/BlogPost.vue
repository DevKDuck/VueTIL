<script setup>
import { ref } from "vue";

//const aa = defineProps(['id', 'title'])
defineProps(['id', 'title'])
const emits = defineEmits(['fontSizeChange']);

const fontSize = ref(10);

function onClick() {
    fontSize.value++; 
    emits('fontSizeChange', fontSize.value);
}
</script>

<template>
  <h4 :style="{'font-size':fontSize + 'pt'}">{{ id }} : {{ title }}</h4>
  <button @click="onClick">텍스트 확대</button>
</template>