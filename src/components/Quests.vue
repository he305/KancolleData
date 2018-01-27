<template>
<table class="questTable table">
    <tr class="thead-dark">
        <th>Name</th>
        <th>Requirements</th>
        <th>Resources</th>
        <th>Rewards</th>
        <th>Notes</th>
    </tr>
    <tr v-for="quest in quests" :key="quest.name">
        <td class="questName" :id="quest.name">{{quest.name}}</td>
        <td class="questRequirement">{{quest.requirements}}</td>
        <td class="questResources">{{quest.resources}}</td>
        <td class="questRewards" v-html="quest.rewards"></td>
        <!-- <td class="questRewards">{{quest.rewards}}</td> -->
        <td class="questNote" v-html="convertNote(quest.note)"></td>
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

.questTable tr td, th{
    border: 1px solid;
    padding: 20px;
    text-align: center;
}

.questTable {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
}

.questNote {
    width: 5%;
}

.questName {
    width: 5%;
}
.questResources {
    width: 1%;
    white-space: nowrap;
}
.questRewards {
}
.questRequirement {
    width: 40%;
}
</style>
