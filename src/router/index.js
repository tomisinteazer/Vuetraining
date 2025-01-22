import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import NotFound from '@/views/NotFound.vue'
import Contact from '@/views/Contact.vue'
import User from '@/views/User.vue'
import HomeStore from '@/views/HomeStore.vue'
import Checkout from '@/views/Checkout.vue'
import Users from '@/views/Users.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props:true,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      props:true
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: "contact",
      component:Contact,

    },

    {
      path: '/checkout',
      name: "checkout",
      component:Checkout,

    },



    {

      path:'/user/:name',
      name:'user',
      component:User,
      props:true

    },
    {

      path:'/users', 
      name:'users',
      component:Users,
    },
    {

      path:'/store',
      name:'homeStore',
      component:HomeStore,
      props:true

    },

    { 
      path: '/:pathMatch(.*)*',
      name : "Not Found",
      component: NotFound 
     }
  ],
})

export default router
