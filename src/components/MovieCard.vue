<template>
  <div class="movie-card-container">
    <div
      v-show="allMovies.length"
      v-for="(movie, index) in allMovies"
      :key="index"
      class="movie-card"
    >
      <div class="card-img" :style="getPoster(index)">
        <div class="card-content">
          <p> Release Date: {{movie.release_date}} | Rating: {{voteAvg(index)}} % </p>
          <div class="h1">{{ movie.title }}</div>
          <router-link to="/details" class="more-info">More Info</router-link>
          <button @click="handleWatchList(index)">Add to watchlist</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  computed: {
    allMovies: function () {
      return this.$store.state.movies
    }
  },
  mounted () {
    // utk set state
    this.movieList()
  },
  methods: {
    movieList: function () {
      return this.$store.dispatch('getMovies')
    },
    handleWatchList: function (index) {
      const payload = this.$store.state.movies[index]
      return this.$store.dispatch('addToWatchList', payload)
    },
    voteAvg: function (index) {
      const vote = this.$store.state.movies[index].vote_average * 10
      return vote
    },
    getPoster: function (index) {
      const scrWidth = screen.width
      const scrHeight = screen.height
      let base = ''
      if (scrWidth < 640 || scrHeight < 640) {
        base = 'http://image.tmdb.org/t/p/w400'
      } else {
        base = 'http://image.tmdb.org/t/p/w500'
      }
      const poster = this.$store.state.movies[index].poster_path
      const posterPath = base.concat(poster)
      return `background-image: url('${posterPath}')`
    }
  }
}
</script>
