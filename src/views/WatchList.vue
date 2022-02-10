<template>
  <div>
    <h1>Watch List</h1>
    <MovieCard />
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue'

export default {
  name: 'WatchList',
  components: {
    MovieCard
  }
}
</script>
