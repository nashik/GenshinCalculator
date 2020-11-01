import Vue from 'vue'
//import App from './App.vue'
import GenshinCalc from './components/pages/GenshinCalc2.vue'
import vuetify from './plugins/vuetify'

Vue.config.devtools = true;
Vue.config.productionTip = false

new Vue({
  vuetify,
  // render: h => h(App)
  render: h => h(GenshinCalc)
}).$mount('#app')
