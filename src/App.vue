<template>
  <div id="app">
    <nav id="nav">
      <div class="container">
        <router-link to="/">Home</router-link>
        <router-link to="/watchlist">Watch List</router-link>
      </div>
    </nav>
    <main>
      <div class="container">
        <router-view/>
      </div>
    </main>
  </div>
</template>

<style lang="scss">
@use '@/assets/scss/main.scss' as *;
</style>
