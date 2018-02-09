<template>
<div>
    <a class="btn btn-primary" @click="get4chThread">4ch</a>
    <ul>
        <li v-for="post in kancolleThread.posts" :key="post.sub">
            <div v-if="post.sub == undefined">
                <span v-html="post.com"></span>
                <a v-if="post.tim != undefined" :href="'https://i.4cdn.org/jp/' + post.tim + post.ext" target="_blank" v-text="'https://i.4cdn.org/jp/' + post.tim + post.ext"></a>
            </div>
        </li>
    </ul>
        
</div>
</template>


<script>
import Thread from '../services/getThreads.js'
import axios from 'axios'
export default {
    data () {
        return {
            content: '',
            kancolleThread : {}
        }
    },
    methods: {
        get4chThread() {
            axios.get("https://a.4cdn.org/jp/catalog.json")
                .then(res => {
                    let catalog = res.data;
                    catalog.forEach((page) => {
                        page.threads.forEach((thread) => {
                            if (thread.sub != undefined && thread.sub.toLowerCase().indexOf("Kancolle".toLowerCase()) !== -1) {
                                axios.get("https://a.4cdn.org/jp/thread/" + thread.no + ".json")
                                    .then(threadRes => {
                                        this.kancolleThread = threadRes.data;
                                    })
                            }
                        })
                    })
                })
            //Thread.get4ch();
        }
    }
}
</script>


<style scoped>

</style>
