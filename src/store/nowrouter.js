import Vue from 'vue'
// 记住上一个路由从哪里来
// 在每个返回组件和跳转组件用
export const CUR_ROUTER = 'CUR_ROUTER'
export const CUR_ROUTERClEAR = 'CUR_ROUTERClEAR'

export default {
    state:JSON.parse(sessionStorage.getItem('lr')) || [],
    mutations: {
        [CUR_ROUTER](state,cur) {
            sessionStorage.setItem('lr',JSON.stringify(cur))
            Object.assign(state,cur)
        },
        [CUR_ROUTERClEAR](state) {
            sessionStorage.removeItem('lr')
            Object.keys(state).forEach(k => Vue.delete(state,k))
        }
    },
    actions:{
        [CUR_ROUTER]({commit},cur) {
            commit(CUR_ROUTER,cur)
        },
        [CUR_ROUTERClEAR]({commit},cur) {
            commit({CUR_ROUTERClEAR})
        }
    }
}
