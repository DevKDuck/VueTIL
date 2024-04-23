<script setup>
import { ref } from "vue";

const param = ref({
    uid : "",
    pwd : "",
    pwd2 : "",
    name : "",
    gender : "",
    selected_hobby : [],
    birth_day : ""
});
const hobbies = ref([
  { hobby_id: 1, hobby_name: "자전거" },
  { hobby_id: 2, hobby_name: "영화보기" },
  { hobby_id: 3, hobby_name: "독서" },
]);

const onsubmit = (event) => {
  if (param.value.pwd !== param.value.pwd2) {
    alert("확인 비밀번호가 다름니다. 다시 입력 해주세요");
    param.value.pwd = "";
    param.value.pwd2 = "";
    return;
  }

  if (param.value.gender == "") {
    alert("성별을 선택해주세요");
    return;
  }

  console.log("uid", param.value.uid);
  console.log("pwd", param.value.pwd);
  console.log("name", param.value.name);
  console.log("gender", param.value.gender);
  console.log("selected_hobby", param.value.selected_hobby);
  console.log("birth_day", param.value.birth_day);
  console.log("param", param.value);

};
</script>

<template >
  <div>
    <form @submit.prevent="onsubmit">
      <div>
        <label for="uid">아이디 : </label>
        <input
          type="text"
          id="uid"
          v-model="param.uid"
          placeholder="아이디를 입력해주세요"
          required
        />
      </div>
      <div>
        <label for="pwd">비밀번호 : </label>
        <input
          type="password"
          id="pwd"
          v-model="param.pwd"
          placeholder="비밀번호를 입력해주세요"
          required
        />
      </div>
      <div>
        <label for="uid2">확인비밀번호 : </label>
        <input
          type="password"
          id="pwd2"
          v-model="param.pwd2"
          placeholder="확인 비밀번호를 입력해주세요"
          required
        />
      </div>
      <div>
        <label for="name">이 름 : </label>
        <input
          type="text"
          id="name"
          v-model="param.name"
          placeholder="이름을 입력해주세요"
          required
        />
      </div>
      <div>
        <label>성 별 : </label>
        <input
          type="radio"
          id="gender-m"
          v-model="param.gender"
          value="남"
          required
        />
        <label for="gender-m">남자</label>
        <input
          type="radio"
          id="gender-f"
          v-model="param.gender"
          value="여"
          required
        />
        <label for="gender-f">여자</label>
      </div>
      <div>
        <label>취미 : </label><br />
        <div v-for="hobby in hobbies" :key="hobby.hobby_id">
          <input
            type="checkbox"
            :id="hobby.hobby_id"
            v-model="param.selected_hobby"
            :value="hobby.hobby_id"
          />
          <label :for="hobby.hobby_id">{{ hobby.hobby_name }} </label>
        </div>
      </div>
      <div>
        <label for="birth_day">생년월일 : </label>
        <input type="date" id="birth_day" v-model="param.birth_day" required />
      </div>
      <div>
        <input type="submit" value="회원가입" />
      </div>
    </form>
  </div>
</template>
  
<style lang="">
</style>