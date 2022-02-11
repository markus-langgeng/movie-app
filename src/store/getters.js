export default {
  allMovies: (state) => {
    return state.movies
  },
  allWatchList: (state) => {
    return state.watchlist
  },
  checkIds: (state) => {
    return function (id) {
      return state.watchlist_ids.includes(id)
    }
  }
}
