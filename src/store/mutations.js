export default {
  setMovies: (state, movies) => {
    state.movies = movies
  },
  appendToWatchList: (state, payload) => {
    state.watchlist.push(payload)
  }
}
