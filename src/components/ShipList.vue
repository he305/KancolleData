<template>
<div>
    <input type="text" @input="handleSearch" placeholder="Type ship name" />
  <ul>
      <li v-for="ship in ships" :key="ship.name">
          <div>{{ship.name}}</div>
          <router-link :to="{name: 'ShipInfo', params: {shipName : ship.name}}"><img :src="ship.stats[ship.stats.length-1].image" /></router-link>
      </li>
  </ul>
</div>
</template>

<script>
import ships_data from '../assets/ships.json';
export default {
    name: "ShipList",
    data() {
        return {
            ships : ships_data
        }
    },
    methods: {
      handleSearch: function(event) {
          var searchQuery = event.target.value.toLowerCase();
          var ships = ships_data.filter(function(item) {
              var searchValue = item.name.toLocaleLowerCase();
              return searchValue.indexOf(searchQuery) !== -1;
          });

          this.ships = ships;
      }
    }
}
</script>

<style scoped>
li {
    display: inline-block;
}

ul {
    padding: 0;
    margin: 0;
}
</style>
