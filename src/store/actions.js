import axios from 'axios'

export default {
  async getMovies ({ commit }) {
    const response = await axios
      .get('https://api.themoviedb.org/3/movie/popular?api_key=9350682e7550ba5410fc9498023d14b3&page=1')
    commit('setMovies', response.data.results)
  },
  addToWatchList ({ commit }, payload) {
    commit('appendToWatchList', payload)
  }
}
