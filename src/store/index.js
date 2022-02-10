// import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
// import MovieList from './modules/movie-list'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: null,
    watchlist: []
  },
  getters: {
    allMovies: (state) => {
      return state.movies
    }
  },
  actions: {
    async getMovies ({ commit }) {
      const response = await axios
        .get('https://api.themoviedb.org/3/movie/popular?api_key=9350682e7550ba5410fc9498023d14b3&page=1')
      commit('setMovies', response.data.results)
    },
    addToWatchList ({ commit }, payload) {
      commit('appendToWatchList', payload)
    }
  },
  mutations: {
    setMovies: (state, movies) => {
      state.movies = movies
    },
    appendToWatchList: (state, payload) => {
      state.watchlist.push(payload)
    }
  },
  modules: {}
})
