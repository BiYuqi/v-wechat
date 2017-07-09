// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// icon
import '@/assets/weixin_icon/iconfont.css'
import '@/assets/weixin_icon/iconfont.eot'
import '@/assets/weixin_icon/iconfont.svg'
import '@/assets/weixin_icon/iconfont.ttf'
import '@/assets/weixin_icon/iconfont.woff'

// rem.js
import '@/assets/js/rem.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
