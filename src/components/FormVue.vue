<template>
  <div class="form">
    <h1>Form</h1>
    <div class="gender">
      <label>
        <input type="radio" v-model="gender" value="Female"/>
      </label>
      <label>Female</label>
      <label>
        <input type="radio" v-model="gender" value="Male"/>
      </label>
      <label>Male</label>
      <label>
        <input type="radio" v-model="gender" value="Other"/>
      </label>
      <label>Other</label>
    </div>
    <div class="one">
      <label>
        <input type="text" placeholder="First name" v-model="first_name" class="form_input"/>
      </label>
      <label>First name</label>
    </div>
    <div class="one">
      <label>
        <input type="text" placeholder="Second name" v-model="second_name" class="form_input"/>
      </label>
      <label>Second name</label>
    </div>
    <div class="one">
      <label>
        <input type="number" placeholder="Age" v-model="age" class="form_input"/>
      </label>
      <label>Age</label>
    </div>
    <div class="one">
      <label>
        <input type="text" placeholder="Number" v-model="number" class="form_input"/>
      </label>
      <label>Number</label>
    </div>
    <button type="submit" class="form_button" v-on:click="check = validate(name(first_name), name(second_name), phone(number), years(age), choice(gender))">Sign in</button>
    <pre v-if="check">{{Data}}</pre>
    <pre v-else>Incorrect input!</pre>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
@Component
export default class FormVue extends Vue {
  check = false;
  first_name = "";
  second_name  = "";
  number = "";
  age = null;
  gender = "";
  validator_word = /[A-Z-a-z-А-Я-а-я]/;
  validator_number = /[0-9]/;

  validate(first_name, second_name, number, age, gender) {
    return first_name && second_name && number && age && gender;
  }

  name(name) {
    if (name !== "") {
      if (this.validator_word.test(name) && name[0].toUpperCase() === name[0]) {
        for (let i = 0; i < name.length; i++) {
          if (!this.validator_word.test(name[i])) {
            return false;
          }
        }
        return true;
      } else return false;
    } else return false;
  }

  phone(number) {
    if (number.length === 11 && number[0] === "8") {
      for (let i = 0; i < number.length; i++) {
        if (!this.validator_number.test(number[i])) {
          return false;
        }
      }
      return true;
    } else return false;
  }

  years(age) {
    return age >= 1 && age <= 100;
  }

  choice(gender) {
    return gender !== "";
  }

  get Data() {
    return {
      first_name: this.first_name,
      second_name: this.second_name,
      gender: this.gender,
      age: this.age,
      number: this.number
    };
  }
}
</script>

<style scoped>
.form {
  width: 300px;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 4px 16px;
  letter-spacing: 1px;
 }
.one {
  padding-bottom: 15px;
}
.gender {
  padding-top: 15px;
  padding-bottom: 20px;
}
.form_input {
  width: 60%;
  padding: 0 10px 10px 0;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  background-color: transparent;
  outline: none;
  transition: 0.3s;
 }
.form_button {
  width: 100px;
  height: 35px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  letter-spacing: 1px;
  color : #fff;
  background-color: #0071f0;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
 }
button:not(:active) {
  transform: scale(0.95);
}
h1 {
  margin-top: 0;
  margin-bottom: 0;
}
</style>