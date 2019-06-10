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
  },
  {
    path: '/profile',
    name: 'profile',
    component: require('../pages/Profile').default
  },
  {
    path: '/profile/edit',
    name: 'edit_profile',
    component: require('../pages/EditProfile').default
  },
  {
    path: '/file/edit',
    name: 'edit_file',
    component: require('../pages/EditFile').default
  },
  {
    path: '/file/upload',
    name: 'upload_file',
    component: require('../pages/UploadFile').default
  },
  {
    path: '/users',
    name: 'users',
    component: require('../pages/Users').default
  },
  {
    path: '/drive',
    name: 'drive',
    component: require('../pages/Drive').default
  },
  {
    path: '/user/api',
    name: 'user_api',
    component: require('../pages/UserAPI').default
  },
  {
    path: '/logout',
    name: 'logout',
    component: require('../pages/Logout').default
  },
  {
    path: '*',
    redirect: '/notfound'
  }
  ]
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register', '/about', '/notfound']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('token')

  if (authRequired && !loggedIn) {
    return next('/login')
  }
  next()
})
