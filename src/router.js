import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/kwalifikacje',
      name: 'Kwalifikacje',
      component: () => import('./views/Qualifications.vue')
    },
    {
      path: '/oferta',
      name: 'Oferta',
      component: () => import('./views/Offer.vue')
    },
    {
      path: '/superwizja',
      name: 'Superwizja',
      component: () => import('./views/Supervision.vue')
    },
    {
      path: '/kontakt',
      name: 'Kontakt',
      component: () => import('./views/Contact.vue')
    }
  ]
})
