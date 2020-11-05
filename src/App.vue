<template>
  <div id="app">
    <FormVue/>
  </div>
</template>

<script>
import FormVue from "@/components/FormVue";
export default {
  name: "App",
  components: {
    FormVue
  }
}
</script>

<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
