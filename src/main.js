import Vue from 'vue'
import App from './App.vue'
// import 'tulip-ui/dist/css/main.css'
// import tulip from 'tulip-ui'
import { Button, ButtonGroup } from 'tulip-ui'

Vue.config.productionTip = false

// console.log('tulip')
// console.log(tulip)

// Vue.use(tulip)

Vue.use(Button)
Vue.use(ButtonGroup)

new Vue({
  render: h => h(App),
}).$mount('#app')
