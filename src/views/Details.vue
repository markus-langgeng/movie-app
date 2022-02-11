<template>
  <div class="detail" >
      <div class="backdrop" :style="{'background-image': `url('http://image.tmdb.org/t/p/original${detail.backdrop_path}')`}">
        <div class="detail-content">
          <h1> {{detail.title}} </h1>
          <h2> Overview : </h2>
          <p class="overview">{{detail.overview}}</p>
          <div class="stats">
            <p>Genre :
              <ul>
                <li v-for="(genre, index) in getGenres" :key="index"> {{genre}} </li>
              </ul>
            </p>
            <p>Rating : {{detail.vote_average * 10}}% </p>
            <p>Release Date : {{detail.release_date}} </p>
            <p>Original Language : {{detail.original_language}} </p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
// import axios from 'vuex'
import axios from 'axios'

export default {
  name: 'Details',
  data () {
    return {
      detail: null,
      id: this.$route.params.id
    }
  },
  created () {
    axios
      .get('https://api.themoviedb.org/3/movie/popular?api_key=9350682e7550ba5410fc9498023d14b3&page=1')
      .then(response => {
        const movieArr = response.data.results
        movieArr.forEach(movie => {
          if (movie.id.toString() === this.$route.params.id) {
            this.detail = movie
          }
        })
      })
      .catch(error => console.log(error))
  },
  computed: {
    getGenres () {
      const genre = this.detail.genre_ids
      return this.setGenres(genre)
    }
  },
  methods: {
    setGenres (a) {
      console.log(a)
      const newArr = []
      a.forEach(item => {
        switch (item) {
          case 28: newArr.push('Action'); break
          case 12: newArr.push('Adventure'); break
          case 16: newArr.push('Animation'); break
          case 35: newArr.push('Comedy'); break
          case 80: newArr.push('Crime'); break
          case 99: newArr.push('Documentary'); break
          case 18: newArr.push('Drama'); break
          case 10751: newArr.push('Family'); break
          case 14: newArr.push('Fantasy'); break
          case 36: newArr.push('History'); break
          case 27: newArr.push('Horror'); break
          case 10402: newArr.push('Music'); break
          case 9648: newArr.push('Mystery'); break
          case 10749: newArr.push('Romance'); break
          case 878: newArr.push('Science Fiction'); break
          case 10770: newArr.push('TV Movie'); break
          case 53: newArr.push('Thriller'); break
          case 10752: newArr.push('War'); break
          case 37: newArr.push('Western'); break
        }
      })
      return newArr
    }
  }
}
</script>
