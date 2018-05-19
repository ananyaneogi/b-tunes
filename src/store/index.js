import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const url = "https://itunes.apple.com/in/rss/topalbums/limit=100/json"

export default new Vuex.Store({
  state : { // = data
    results:[],
    loading: true
    },
  actions: {
    loadResult({state, commit}) {
      axios.get(url).then((response) => {
        commit('updateResult', response.data.feed.entry)
        state.loading = false
      })
    }
  },
  mutations: {
    updateResult(state, results) {
      state.results = results
    }
  }
})
