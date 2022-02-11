export default {
  setMovies: (state, movies) => {
    state.movies = movies
  },
  appendToWatchList: (state, payload) => {
    state.watchlist.push(payload)
  },
  subtractFromWatchList: (state, id) => {
    state.watchlist = state.watchlist.filter(movie => movie.id !== id)
  },
  addId: (state, id) => {
    state.watchlist_ids.push(id)
  },
  removeId: (state, id) => {
    state.watchlist_ids = state.watchlist_ids.filter(item => item !== id)
  }
}
