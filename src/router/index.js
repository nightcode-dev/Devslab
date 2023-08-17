import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PricingView from '../views/PricingView.vue'
import SignupView from '../views/SignupView.vue'
import SigninView from '../views/SigninView.vue'
import DashboardView from '../views/panel/DashboardView.vue'
import MainView from '../views/panel/HomeView.vue'
import ProjectsView from '../views/panel/ProjectsView.vue'
import UsersView from '../views/panel/UsersView.vue'
import SettingView from '../views/panel/SettingView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import ProjectView from '../views/panel/ProjectView.vue'
import NewProjectView from '../views/panel/NewProjectView.vue'


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
    },
    {
      path: '/dashboard/:id?',
      name: 'dashboard',
      props:true,
      component: DashboardView,
      children: [
        {
          path:'',
          name:'dashboard-home',
          component:MainView
        },
        {
          path:'projects',
          name:'dashboard-projects',
          component:ProjectsView,
          children:[
            {
              path:'statistics',
              name:'dashboard-projects-statistics',
              component:ProjectsView
            }
          ]
        },
        {
          path:'projects/:project_id',
          name:'dashboard-projects-project',
          component:ProjectView
        },
        {
          path:'projects/new',
          name:'dashboard-projects-new',
          component:NewProjectView
        },
        {
          path:'users',
          name:'dashboard-users',
          component:UsersView,
          children:[
            {
              path:'statistics',
              name:'dashboard-users-statistics',
              component:UsersView
            }
          ]
        },
        {
          path:'setting',
          name:'dashboard-setting',
          component:SettingView
        }
      ]
    },
    {
      path:'/:notFOund',
      name:'notFound',
      component:NotFoundView
    }
  ]
})

router.beforeEach((to, from, nx) => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  nx()
})

export default router
