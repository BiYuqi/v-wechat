import axios from 'axios'
import store from './store/store'
import * as types from './store/types'
import router from './router'
// 登录权限
router.beforeEach((to,from,next) =>{
    if(to.meta.requireAuth){
        //这里只判断了id 实际上线应该判断token
        if(store.state.user.id){
            next()
        }else{
            next({
                path:'/login',
                query:{redirect:to.fullPath}
            })
        }
    }else{
        next();
    }
})

// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = `token ${store.state.token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面
                    store.commit(types.LOGOUT);
                    router.replace({
                        path: 'login',
                        query: {redirect: router.currentRoute.fullPath}
                    })
            }
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    });
