import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue"
import InitBanner from "@/views/InitBanner.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/banner',
      name: 'banner',
      component: () => import('@/views/InitBanner.vue')
    }
  ]
})

export default router
