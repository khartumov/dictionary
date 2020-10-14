import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    starredWords: []
  },

  mutations: {
    setStarredWordsFromLS (state, payload) {
      state.starredWords = payload
    }
  }
})
