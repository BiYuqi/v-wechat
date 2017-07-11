import Vue from 'vue'
import Router from 'vue-router'


// 主界面
import WeChat from '@/components/wechat'
import Chat from '@/components/layout/chat'
import Contact from '@/components/layout/contact'
import Discover from '@/components/layout/discover'
import Myself from '@/components/layout/myself'

//
import AddFriend from '@/components/common/add-friend'

// 注册登录相关
import Login from '@/components/login/login'

// 我 界面
import Me from '@/components/login/user'
import nickName from '@/components/me/nickname'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
      path: '/wechat',
      name: 'wechat',
      component: WeChat,
      children: [
          {
              path: 'chat',
              name: 'chat',
              meta: {
                  requireAuth:true
              },
              component: Chat
          },
          {
              path: 'contact',
              name: 'contact',
              meta: {
                  requireAuth:true
              },
              component: Contact
          },
          {
              path: 'discover',
              name: 'discover',
              meta: {
                  requireAuth:true
              },
              component: Discover
          },
          {
              path: 'myself',
              name: 'myself',
              meta: {
                  requireAuth:true
              },
              component: Myself
          }
      ]
    },
    // add common
    {
      path: '/wechat/common/add-friend',
      name: 'add',
      meta: {
          requireAuth:true
      },
      component: AddFriend
    },
    {
      path:'/wechat/myself/me',
      name:'me',
      component:Me
    },
    {
        path:'/wechat/myself/nickname',
        name:'nickname',
        component:nickName
    }


  ]
})
