// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './http'
import store from './store'

Vue.config.productionTip = false
// 在原型上全局注册 调用方式  this.$http()
Vue.prototype.$http = axios

router.beforeEach((to, from, next) => {
    if(to.meta.requireAuth){
        if (store.state.user.token) {
            next();
        }
        else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
        }
    }
    else {
        next();
    }
})

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
  store,
  template: '<App/>',
  components: { App }
})
