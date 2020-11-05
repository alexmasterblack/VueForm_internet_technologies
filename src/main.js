import Vue from 'vue'
import App from './App.vue'

Vue.component('user', {
  props: {
      name: {
        type: String,
        required: true,
        default: 'Tom',
        validator: function(value){
            return value!=='admin' && value!=='';
        }
      },
      age: {
        type: Number,
        required: true,
        default: 18,
        validator: function(value){
            return value >= 0 && value < 100;
        }
      }
  }
})

new Vue({
  el: '#app',
    data: {
      user: {
        name: '',
        age: 0
      }
    },
  render: h => h(App),
}).$mount('#app')
