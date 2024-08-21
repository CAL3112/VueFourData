import { createRouter, createWebHistory } from 'vue-router'
import EntreprisesView from '../views/EntreprisesView.vue'
import EntrepriseSearchView from '../views/EntrepriseSearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: EntrepriseSearchView
    },
    {
      path: '/entreprises',
      name: 'entreprises',
      component: EntreprisesView
    },
  ]
})

export default router
