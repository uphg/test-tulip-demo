import Vue from 'vue'
import App from './App.vue'
// import 'tulip-ui/dist/css/main.css'
import tulip from 'tulip-ui'
const { Button, ButtonGroup } = tulip

// console.log('tulip')
// console.log(tulip)

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(ButtonGroup)

new Vue({
  render: h => h(App),
}).$mount('#app')
