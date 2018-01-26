import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ShipList from '@/components/ShipList'
import ShipInfo from '@/components/ShipInfo'
import Quests from '@/components/Quests'

Vue.use(Router)

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
    }
  ]
})
