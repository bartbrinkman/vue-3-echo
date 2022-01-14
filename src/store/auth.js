export default {
  namespaced: true,

  state: {
    authenticated: false,
    user: null
  },

  getters: {
    authenticated (state) {
      return state.authenticated
    },

    user (state) {
      return state.user
    }
  },

  mutations: {
    SET_AUTHENTICATED (state, value) {
      state.authenticated = value
    },

    SET_USER (state, value) {
      state.user = value
    }
  },

  actions: {
    async login ({ dispatch }, credentials) {
      await window.axios.get('/sanctum/csrf-cookie')
      await window.axios.post('/login', credentials)
      return dispatch('me')
    },

    async logout ({ dispatch }) {
      await window.axios.post('/logout')
      return dispatch('me')
    },

    me ({ /* dispatch, */ commit }) {
      return window.axios.get('/api/user').then((response) => {
        commit('SET_AUTHENTICATED', true)
        commit('SET_USER', response.data)
      })
      // .then(() => {
      //   dispatch('app/init', {}, { root: true })
      // })
      .catch(() => {
        commit('SET_AUTHENTICATED', false)
        commit('SET_USER', null)
      })
    }
  }
}