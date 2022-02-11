<template>
  <div class="movie-card-container">
    <div class="movie-card"  v-for="movie in allWatchList" :key="movie.id">
      <div class="card-img" :style="{'background-image': `url('http://image.tmdb.org/t/p/w500${movie.poster_path}')`}">
        <div class="card-content">
          <div>
              Release Date : {{ movie.release_date }} | Rating : {{ movie.vote_average * 10 }} %
          </div>
          <div class="h1"> {{ movie.title }} </div>
          <div class="btn-container">
            <router-link class="more-info" :to="`/details/${movie.id}`" >More Info</router-link>
            <button class="add-watchlist" @click="rmFromWatchList(movie.id); removeId(movie.id)" >Remove from watchlist</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  // props: {
  //   insideWatchlist: Array
  // },
  name: 'WatchListCard',
  data () {
    return {
      // isDisabled: false,
      movieIds: null
    }
  },
  computed: {
    ...mapGetters([
      'allWatchList'
    ])
  },
  methods: {
    ...mapActions([
      'rmFromWatchList',
      'removeId'
    ]),
    showBtn (id) {
      this.movieIds = id
    }
  }
}
</script>
