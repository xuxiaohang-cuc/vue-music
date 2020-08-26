import Vue from 'vue'
import Router from 'vue-router'
import Recommond from 'components/recommond/recommond'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Recommond',
      component: Recommond
    }
  ]
})
