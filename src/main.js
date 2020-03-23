import Vue from 'vue'
import App from './App.vue'
import router from './router'
import registerModule from './../packages/register'
Vue.config.productionTip = false
registerModule(Vue)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
