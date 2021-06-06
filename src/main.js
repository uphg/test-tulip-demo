import Vue from 'vue'
import App from './App.vue'
import 'tulip-ui/dist/css/main.css'
import tulip from 'tulip-ui'

Vue.config.productionTip = false

Vue.use(tulip)

new Vue({
  render: h => h(App),
}).$mount('#app')
