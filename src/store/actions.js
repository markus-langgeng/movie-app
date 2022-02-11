import axios from 'axios'

export default {
  async fetchMovies ({ commit }) {
    const response = await axios
      .get('https://api.themoviedb.org/3/movie/popular?api_key=9350682e7550ba5410fc9498023d14b3&page=1')
    commit('setMovies', response.data.results)
  },
  addToWatchList ({ commit }, payload) {
    commit('appendToWatchList', payload)
  },
  rmFromWatchList ({ commit }, { id }) {
    commit('subtractFromWatchList', id)
  },
  addId ({ commit }, id) {
    commit('addId', id)
  },
  removeId ({ commit }, id) {
    commit('removeId', id)
  }
}
