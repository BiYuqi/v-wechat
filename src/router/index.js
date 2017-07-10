import Vue from 'vue'
import Router from 'vue-router'


// 主界面
import WeChat from '@/components/wechat'
import Chat from '@/components/contact/chat'
import Contact from '@/components/contact/contact'
import Discover from '@/components/contact/discover'
import Me from '@/components/contact/me'

//
import AddFriend from '@/components/common/add-friend'

// 注册登录相关
import Login from '@/components/loginregist/login'

Vue.use(Router)

export default new Router({
  routes: [
        {
          path: '/',
          redirect: {
              name:'login'
          }
        },
        {
          path: '/wechat',
          name: 'wechat',
          component: WeChat,
          children: [
              {
                  path: 'chat',
                  name: 'chat',
                  component: Chat
              },
              {
                  path: 'contact',
                  name: 'contact',
                  component: Contact
              },
              {
                  path: 'discover',
                  name: 'discover',
                  component: Discover
              },
              {
                  path: 'me',
                  name: 'me',
                  component: Me
              }
          ]
        },
        // add common
        {
          path: '/wechat/common/add-friend',
          name: 'add',
          component: AddFriend
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
  ]
})
