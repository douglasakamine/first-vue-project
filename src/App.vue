<template>
  <div id="app">
    <header class="center"><img src="./assets/image.jpeg" alt="spotted-recruit" 
    class="img align-top" id="logo"></header>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/jobs">Jobs</router-link> |
      <router-link to="/applicants">Applicants</router-link>
    </div>
    <b-container>
    <router-view></router-view>
    </b-container>
  </div>
</template>

<script>


export default {
  name: 'App'
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
#logo {
  width: 250px;
}
#button {
  margin: 10px;
}

</style>
