import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Links from '../views/Links.vue'
import Socials from '../views/Socials.vue'
import Donate from '../views/Donate.vue'
import Projects from '../views/Projects.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/links',
    name: 'Links',
    component: Links
  },
  {
    path: '/socials',
    name: 'Socials',
    component: Socials
  },
  {
    path: '/donate',
    name: 'Donate',
    component: Donate
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
