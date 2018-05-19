import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const url = "https://itunes.apple.com/in/rss/topalbums/limit=100/json"

export default new Vuex.Store({
  state : { // = data
    results:[],
    favourites:[],
    toggleFav: false
  },
  actions: {
    loadResult({commit}) {
      axios.get(url).then((response) => {
        commit('updateResult', response.data.feed.entry)
      })
    },
    addToFavourite({commit, state}, result) {
        commit('updateFavourite', result)
        // if(!result.title.label === item.result.title.label) {
        // }arr.forEach((num, index) => {
    }
  },
  mutations: {
    updateResult(state, results) {
      state.results = results
      // console.log(results[0].id.attributes['im:id']);
    },
    updateFavourite(state, result){
      state.favourites.push({result})
      state.favourites.forEach(item => {
        if(item.result.id.attributes['im:id'] === result.id.attributes['im:id']) {
          state.favourites.pop({result})
        }
      })
    }
  }
})
