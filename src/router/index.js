import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PricingView from '../views/PricingView.vue'
import SignupView from '../views/SignupView.vue'
import SigninView from '../views/SigninView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: PricingView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/signin',
      name: 'signin',
      component: SigninView
    }
  ]
})

router.beforeEach((to,from,nx)=>{
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
  nx()
})

export default router
