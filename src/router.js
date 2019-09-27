import Vue from 'vue'
import Router from 'vue-router'
import About from "@/views/About.vue";
import Qualifications from "@/views/Qualifications.vue";
import Offer from "@/views/Offer.vue";
import Supervision from "@/views/Supervision.vue";
import Contact from "@/views/Contact.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: About
    },
    {
      path: '/kwalifikacje',
      name: 'Kwalifikacje',
      component: Qualifications
    },
    {
      path: '/oferta',
      name: 'Oferta',
      component: Offer
    },
    {
      path: '/superwizja',
      name: 'Superwizja',
      component: Supervision
    },
    {
      path: '/kontakt',
      name: 'Kontakt',
      component: Contact
    }
  ]
})
