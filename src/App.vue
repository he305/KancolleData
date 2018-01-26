<template>
  <div id="app">
    <router-link to='/'><img id="logo" src="./assets/logo.png" /></router-link>
    <nav>
      <router-link to='/quests'>Quests</router-link>
      <router-link to="/ships">Ship list</router-link>
    </nav>
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
  margin-bottom: 10px;
}
</style>
