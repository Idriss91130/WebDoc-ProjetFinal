import Vue from 'vue'
import index from './index.vue'
import './styles/styles.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(index),
}).$mount('#app')
