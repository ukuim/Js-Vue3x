
import { createStore } from 'vuex'
import userModule from '@/store/model/userModule'
// 创建一个新的 store 实例
const store = createStore({

    modules:{
        user:userModule
    }

})
store.state.user
export default store
