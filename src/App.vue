<template>
  <div id="app">
    <FormVue/>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import FormVue from "@/components/FormVue";
@Component({
  components: {
    FormVue
  }
})
export default class App extends Vue {}
</script>

<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
