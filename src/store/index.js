import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    starredWords: []
  },

  getters: {
    getWordByTitle: state => title => {
      return state.starredWords.find(word => word.title === title)
    }
  },

  mutations: {
    setStarredWordsFromLS (state, payload) {
      state.starredWords = payload
    },

    addWordToStarred (state, payload) {
      state.starredWords.push(payload)
    },

    removeWordFromStarred (state, payload) {
      state.starredWords = state.starredWords.filter(word => word.title !== payload.title)
    }
  },

  actions: {
    changeWordStatus ({ dispatch, commit, getters }, word) {
      const isWordInStarred = getters.getWordByTitle(word.title)

      if (!isWordInStarred) {
        commit('addWordToStarred', word)
      } else {
        commit('removeWordFromStarred', word)
      }

      dispatch('updateLocalStorage')
    },

    updateLocalStorage () {
      localStorage.setItem('dictionaryStarredWords', JSON.stringify(this.state.starredWords))
    }
  }
})
