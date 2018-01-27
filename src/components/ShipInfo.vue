<template>
<div>
    <h2>{{$route.params.shipName}}</h2>
    <table v-for="stats in ship.stats" :key="stats.japanese_name" border="1px solid" class="shipTable">
        <tr>
            <td colspan="4">{{stats.japanese_name}}</td>
        </tr>
        <tr >
            <td colspan="4"><img :src="stats.image"/></td>
        </tr>
        <tr>
            <td colspan="4">{{stats.description}}</td>
        </tr>
        <tr>
            <td colspan="4">Remodel level: {{stats.remodel_level}}</td>
        </tr>
        <tr>
            <td>HP</td>
            <td>{{stats.hp}}</td>
            <td>Firepower</td>
            <td>{{stats.firepower}}</td>
        </tr>
        <tr>
            <td>Armor</td>
            <td>{{stats.armor}}</td>
            <td>Torpedo</td>
            <td>{{stats.torpedo}}</td>
        </tr>
        <tr>
            <td>Evasion</td>
            <td>{{stats.evasion}}</td>
            <td>AA</td>
            <td>{{stats.aa}}</td>
        </tr>
        <tr>
            <td>Aircraft</td>
            <td>{{stats.aircraft}}</td>
            <td>ASW</td>
            <td>{{stats.asw}}</td>
        </tr>
        <tr>
            <td>Speed</td>
            <td>{{stats.speed}}</td>
            <td>LOS</td>
            <td>{{stats.los}}</td>
        </tr>
        <tr>
            <td>Range</td>
            <td>{{stats.range}}</td>
            <td>Luck</td>
            <td>{{stats.luck}}</td>
        </tr>
    </table>
</div>
</template>


<script>
import ships from '../assets/ships.json'
export default {
  name: "ShipInfo",
  data() {
      return {
      }
  },
  created() {
      this.getShip();
  },
  methods : {
      getShip: function() {
          var name = this.$route.params.shipName;
          this.ship = ships.filter(function(item) {
              return name === item.name;
          })[0];
          console.log(this.ship)
      }
  }
}
</script>

<style scoped>
.shipTable {
    display: inline-block;
    border-collapse: collapse;
    margin: 10px;
    text-align: center;
}
.shipTable tr td {
    padding: 10px;
}

</style>
