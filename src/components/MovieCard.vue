<template>
  <div class="movie-card-container">
    <div class="movie-card" v-for="movie in allMovies" :key="movie.id">
      <div class="card-img" :style="{'background-image': `url('http://image.tmdb.org/t/p/w780${movie.poster_path}')`}">
        <div class="card-content">
          <div class="p">
              Release Date : {{ movie.release_date }} | Rating : {{ movie.vote_average * 10 }}%
          </div>
          <div class="h1"> {{ movie.title }} </div>
          <div class="btn-container">
            <router-link class="more-info" :to="`/details/${movie.id}`">More Info</router-link>
            <button
            class="add-watchlist"
            @click.once="addToWatchList(movie); addId(movie.id)"
            v-show="!checkIds(movie.id)"
            >Add to watchlist</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    showBtn: Function
  },
  data () {
    return {
      clickedBtn: []
    }
  },
  name: 'MovieCard',
  computed: {
    ...mapGetters([
      'allMovies',
      'checkIds'
    ])
  },
  created () {
    this.fetchMovies()
  },
  methods: {
    ...mapActions([
      'fetchMovies',
      'addToWatchList',
      'addId',
      'checkMovie'
    ]),
    disableBtn (id) {
      this.clickedBtn.push(id)
    }
  }
}
</script>
