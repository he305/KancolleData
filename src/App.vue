<template>
  <div id="app">
    <header>
    <router-link to='/'><img id="logo" src="./assets/logo.png" /></router-link>
    <h2 class="siteName">he305 Kancolle DB</h2>
    </header>
    <nav>
      <router-link to='/quests'>Quests</router-link>
      <router-link to="/ships">Ship list</router-link>
      <router-link to="/event">Event</router-link>
    </nav>
    <hr>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
#logo {
  width: 5%;
  height: 5%;
}

nav {
  margin: 10px 10px 0px 0px;
}

nav a {
  margin: 0px 20px 0px 0px;
}

.siteName {
  float: right;
  width: 25%;
}

a {
  color: #42b983;
}
</style>
