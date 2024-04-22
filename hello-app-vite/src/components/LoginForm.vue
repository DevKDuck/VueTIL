

<template lang="">
    <form v-on:submit="loginForm">
    <p> 
        아이디 : 
        <input v-model = "user_id" placeholder="아이디 입력하세요"/>
    </p>

    <p> 
        비밀번호 :
        <input v-model = "user_pwd" placeholder="비밀번호 입력하세요"/>
    </p>

    <p> 
        비밀번호 확인 : 
        <input v-model = "user_pwd2" placeholder="비밀번호 입력하세요"/>
    </p>

    <div> 
        성별: 
        <input type="radio" id="male" value="남자" v-model="picked"/>
        <label for="male">남자</label>

        <input type="radio" id="female" value="여자" v-model="picked"/>
        <label for="female">여자</label>
    </div>

    <div> 
        취미: 
        <input type="checkbox" id="drum" value="드럼" v-model="hobby">
        <label for="drum">드럼</label>

        <input type="checkbox" id="piano" value="건반" v-model="hobby">
        <label for="piano">건반</label>

        <input type="checkbox" id="guitar" value="기타" v-model="hobby">
        <label for="guitar">기타</label>
    </div>


    <p> 
        이름 : 
        <input v-model = "user_name" placeholder="이름 입력하세요"/>
    </p>

    <p> 
        생년월일 : 
        <input v-model = "user_birthday" placeholder="생년월일 입력하세요"/>
    </p>

    <button @click="(event) => loginForm(event)">
  제출하기
</button>

 
</form>
</template>
<script setup>
    import {ref, reactive} from 'vue'

    const user_id = ref('')
    const user_pwd = ref('')
    const user_pwd2 = ref('')

    const picked = ref('')
    const hobby = ref([])

    const user_name = ref('')
    const user_birthday = ref('')
    
    function loginForm(event) {
  // 이제 네이티브 이벤트 객체에 접근할 수 있습니다.
  if (event) {
    event.preventDefault()
    console.log(user_id.value)
    alert(user_id.value)

    console.log(picked.value)
  }
  
}

</script>
<style lang="">
    
</style>