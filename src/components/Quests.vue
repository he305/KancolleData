<template>
<table border="1px solid">
    <tbody>
        <tr>
            <th>Name</th>
            <th>Requirements</th>
            <th>Resources</th>
            <th>Rewards</th>
            <th>Notes</th>
        </tr>
    </tbody>
    <tr v-for="quest in quests">
        <td :id="quest.name">{{quest.name}}</td>
        <td>{{quest.requirements}}</td>
        <td>{{quest.resources}}</td>
        <td>{{quest.rewards}}</td>
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

</style>
