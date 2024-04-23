<script setup>
import { ref } from "vue";

const uid = ref("");
const pwd = ref("");
const pwd2 = ref("");
const name = ref("");
const gender = ref("");
const hobbies = ref([
  { hobby_id: 1, hobby_name: "자전거" },
  { hobby_id: 2, hobby_name: "영화보기" },
  { hobby_id: 3, hobby_name: "독서" },
]);
const selected_hobby = ref([]);
const birth_day = ref("");

const onsubmit = (event) => {
  if (pwd.value !== pwd2.value) {
    alert("확인 비밀번호가 다름니다. 다시 입력 해주세요");
    pwd.value = "";
    pwd2.value = "";
    return;
  }

  if (gender.value == "") {
    alert("성별을 선택해주세요");
    return;
  }

  console.log("uid", uid.value);
  console.log("pwd", pwd.value);
  console.log("name", name.value);
  console.log("gender", gender.value);
  console.log("selected_hobby", selected_hobby.value);
  console.log("birth_day", birth_day.value);
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
          v-model="uid"
          placeholder="아이디를 입력해주세요"
          required
        />
      </div>
      <div>
        <label for="pwd">비밀번호 : </label>
        <input
          type="password"
          id="pwd"
          v-model="pwd"
          placeholder="비밀번호를 입력해주세요"
          required
        />
      </div>
      <div>
        <label for="uid2">확인비밀번호 : </label>
        <input
          type="password"
          id="pwd2"
          v-model="pwd2"
          placeholder="확인 비밀번호를 입력해주세요"
          required
        />
      </div>
      <div>
        <label for="name">이 름 : </label>
        <input
          type="text"
          id="name"
          v-model="name"
          placeholder="이름을 입력해주세요"
          required
        />
      </div>
      <div>
        <label>성 별 : </label>
        <input
          type="radio"
          id="gender-m"
          v-model="gender"
          value="남"
          required
        />
        <label for="gender-m">남자</label>
        <input
          type="radio"
          id="gender-f"
          v-model="gender"
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
            v-model="selected_hobby"
            :value="hobby.hobby_id"
          />
          <label :for="hobby.hobby_id">{{ hobby.hobby_name }} </label>
        </div>
      </div>
      <div>
        <label for="birth_day">생년월일 : </label>
        <input type="date" id="birth_day" v-model="birth_day" required />
      </div>
      <div>
        <input type="submit" value="회원가입" />
      </div>
    </form>
  </div>
</template>
  
<style lang="">
</style>