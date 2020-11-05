<template>
  <div class="form">
    <h1>Form</h1>
    <div class="gender">
      <label>
        <input type="radio"/>
      </label>
      <label>Female</label>
      <label>
        <input type="radio"/>
      </label>
      <label>Male</label>
      <label>
        <input type="radio"/>
      </label>
      <label>Other</label>
    </div>
    <div class="one">
      <label>
        <input type="text" placeholder="First name" class="form_input"/>
      </label>
      <label>First name</label>
    </div>
    <div class="one">
      <label>
        <input type="text" placeholder="Second name" class="form_input"/>
      </label>
      <label>Second name</label>
    </div>
    <div class="one">
      <label>
        <input type="number" placeholder="Second name" class="form_input"/>
      </label>
      <label>Age</label>
    </div>
    <div class="one">
      <label>
        <input type="text" placeholder="Number" class="form_input"/>
      </label>
      <label>Number</label>
    </div>
    <button class="form_button">Sign in</button>
  </div>
</template>

<script>
export default {
  name: "FormVue"
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
h1 {
  margin-top: 0;
  margin-bottom: 0;
}
</style>