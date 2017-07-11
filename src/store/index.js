import Vue from 'vue'
import Vuex from 'vuex'
import User from './user'
import CurrentRouter from './nowrouter'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        user:User,
        lr:CurrentRouter
    }
})
