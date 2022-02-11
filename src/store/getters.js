export default {
  allMovies: (state) => {
    return state.movies
  },
  allWatchList: (state) => {
    return state.watchlist
  },
  checkIds: (state) => {
    return function (id) {
      const a = state.watchlist_ids.includes(id)
      console.log(a)
      return a
    }
  }
}
