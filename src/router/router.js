import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: require('../pages/FirstPage').default
  },
  {
    path: '/about',
    name: 'About',
    component: require('../pages/About').default
  },
  {
    path: '/login',
    name: 'login',
    component: require('../pages/Login').default
  },
  {
    path: '/register',
    name: 'register',
    component: require('../pages/Register').default
  },
  {
    path: '/notfound',
    name: 'error404',
    component: require('../pages/404').default
  }
  ]
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')

  if (authRequired && !loggedIn) {
    // return next('/login')
  }
  next()
})
