<template>
  <div id="app">
    <div class="center"><h1>Spotted Recruit - Jobs Manager</h1></div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/jobs">Jobs</router-link>
    </div>
    <b-container>
    <router-view></router-view>
    </b-container>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
