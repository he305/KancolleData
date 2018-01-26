import Vue from 'vue'
import VTab from 'v-tab'
import Router from 'vue-router'
import Home from '@/components/Home'
import ShipList from '@/components/ShipList'
import ShipInfo from '@/components/ShipInfo'
import Quests from '@/components/Quests'
import EventInfo from '@/components/Event'

import 'v-tab/dist/v-tab.css'

Vue.use(Router)
Vue.use(VTab)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ships',
      name: "Ships",
      component: ShipList
    },
    {
      path: '/ship/:shipName',
      name: "ShipInfo",
      component: ShipInfo
    },
    {
      path: '/quests',
      name: "Quests",
      component: Quests
    },
    {
      path: '/event',
      name: "EventInfo",
      component: EventInfo
    }
  ]
})
