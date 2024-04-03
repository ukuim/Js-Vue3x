const userModule = {
    state: {
        user: {
            name: 'admin',
            password: '123456'
        }
    },
    mutations: {
        setUser(state, user) {
            console.log(1)
            state.user = user
            console.log(2)
        }
    },
    actions: {
        setUser({ commit }, user) {
            console.log(3)
            commit('setUser', user)
            console.log(4)
        }
    }
}

export default userModule