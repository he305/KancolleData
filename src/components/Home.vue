<template>
      <div class="homeRoot">
      <h2>Welcome to personal he305 Kancolle DB</h2>
      <h3>TODO list:</h3>
      <ol className="homelist" type="1">
          <li><del>Fix routing</del></li>
          <li><del>Migrate to vue</del></li>
          <li>Fix rewards on quest page</li>
          <li>Fix render of ship info</li>
          <li>Parse map pages</li>
      </ol>
      <p>All information was taken from <a href="http://kancolle.wikia.com">Kancolle Wiki</a></p>
      <p><a href="https://github.com/he305/KancolleData">Github repo</a></p>
      </div>
</template>

<script>
import ships from '../assets/ships.json'
export default {
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}

.homeRoot {
  margin: 10px;
}
</style>
