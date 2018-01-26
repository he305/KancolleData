<template>
<table class="questTable">
    <tr>
        <th>Name</th>
        <th>Requirements</th>
        <th>Resources</th>
        <th>Rewards</th>
        <th>Notes</th>
    </tr>
    <tr v-for="quest in quests" :key="quest.name">
        <td class="questName" :id="quest.name">{{quest.name}}</td>
        <td>{{quest.requirements}}</td>
        <td>{{quest.resources}}</td>
        <td class="rewards">{{quest.rewards}}</td>
        <td v-html="convertNote(quest.note)"></td>
    </tr>
</table>  
</template>

<script>
import quests_data from '../assets/quests.json'
export default {
  name: "Quests",
  data() {
      return {
          quests : quests_data
      }
  },
  methods: {
      convertNote(data) {
        var pattern = /[^><#][A-z]+\d+/g;
        if (data.match(pattern) !== null && data.match(pattern) !== undefined) {
            data.match(pattern).map(function(match) {
                var new_data = match.replace(/[:,\s]/g, '');
                data = data.replace(match, " <a href=#" + new_data + ">" + new_data + "</a>")
            })
            
        }
        return data;
      }
  }
}
</script>

<style scoped>

.questTable tr td{
    border: 1px solid;
    padding: 20px;
    width: 20%;
    text-align: center;
}

.questTable {
    border-collapse: collapse;
    display: block;
}

</style>
