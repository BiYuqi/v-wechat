import axios from 'axios'
import store from './store'
import user from './store/user'
import router from './router'

// axios 配置
// axios.defaults.timeout = 5000;
// axios.defaults.baseURL = 'https://api.github.com';

// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (store.state.user.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = `token ${store.state.user.token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// // http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面
                    store.commit(user.USER_SIGNOUT);
                    router.replace({
                        path: '/login',
                        query: {
                            mode:"fade"
                        }
                    })
            }
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    });

export default axios;
