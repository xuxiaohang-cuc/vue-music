import Vue from 'vue'
import Router from 'vue-router'
import Recommond from 'components/recommond/recommond'
import Rank from 'components/rank/rank'
import Singer from 'components/singer/singer'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Recommond',
      component: Recommond
    },
    {
      path: '/rank',
      component:Rank
    },
    {
      path: '/singer',
      component:Singer
    }
  ]
})
