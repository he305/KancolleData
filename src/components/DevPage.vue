<template>
<button v-on:click="updateQuestsEvt">updateQuestsEvt</button>  
</template>


<script>
import updateQuest from '../pythonscripts/runscript.js';
export default {
    name : "DevPage",
    methods : {
        updateQuestsEvt: (evt) => {
            console.log(updateQuest);
            updateQuest();
        }
    }
}
</script>

<style scoped>

</style>
