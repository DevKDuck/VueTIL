<script setup>
import { ref } from "vue";

const props = defineProps(['id', 'title', 'fontSize'])
const emits = defineEmits(['zoomIn', 'zoomOut']);

//자기 자신의 fontSize를 관리하기 위한 변수
//부모로부터 받은 fontSize를 사용하지 않고 자체적으로 fontSize를 관리
const fontSize = ref(props.fontSize);

function onClickZoomIn() {
    fontSize.value++; 
    console.log("fontSize ->", fontSize.value);
    emits('zoomIn', fontSize.value);
}

function onClickZoomOut() {
    fontSize.value--; 
    emits('zoomOut', fontSize.value);

}
</script>

<template>
  <h4 :style="{'font-size':fontSize + 'pt'}">{{ props.id }} : {{ props.title }}</h4>
  <button class = "btn_style" @click="onClickZoomIn">텍스트 확대</button>
  <button @click="onClickZoomOut">텍스트 축소</button>
</template>

<style >
    .btn_style{
        color: #fff;
        background: linear-gradient(315deg, #42d392 25%, #647eff);
        border: none;
        padding: 5px 10px;
        margin: 5px;
        border-radius: 8px;
        cursor: pointer;
    }
</style>