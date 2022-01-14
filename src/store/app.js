// import axios from 'axios'

export default {
  namespaced: true,

  state: {
    isLoaded: false,
    broadcasts: [
      'Welcome!'
    ]
  },

  getters: {
    isLoaded (state) {
      return state.isLoaded
    },
    broadcasts (state) {
      return state.broadcasts
    }
  },

  mutations: {
    SET_IS_LOADED(state) {
      state.isLoaded = true
    },
    ADD_BROADCAST(state, value) {
      state.broadcasts.push(value)
    }
  },

  actions: {
    // init ({ commit }) {
    //   return axios.get('/api/init').then((response) => {

    //   }).catch(() => {

    //   })
    // },

    receiveBroadcast ({ commit }, name) {
      commit('ADD_BROADCAST', name)
    }
  }
}