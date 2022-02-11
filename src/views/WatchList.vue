<template>
  <div>
    <h1>Watch List</h1>
    <p v-if="!allWatchList.length">Empty...</p>
    <WatchListCard
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import WatchListCard from '@/components/WatchListCard.vue'

export default {
  name: 'WatchList',
  components: {
    WatchListCard
  },
  computed: {
    ...mapGetters(['allWatchList'])
  }
}
</script>
