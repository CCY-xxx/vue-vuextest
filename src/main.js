/*入口js*/
import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from './App'
import router from './router'
import store from './store'
import './mock/mockServer'
import loading from './common/img/loading.gif'
import './filters'
//注册全局组件标签
Vue.component(Button.name,Button)//<mt-button>
Vue.use(VueLazyload,{
  loading
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // render: h => h(App),
  router,
  components: { App },
  template: '<App/>',
  store
})
