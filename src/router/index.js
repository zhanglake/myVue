import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello.vue'
import table from '../views/table.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/table',
      name: 'table',
      component: table
    }
  ]
})
