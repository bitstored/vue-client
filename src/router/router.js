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
    path: '/notfound',
    name: 'error404',
    component: require('../pages/404').default
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
    path: '/profile/delete',
    name: 'delete_profile',
    component: require('../pages/DeleteProfile').default
  },
  {
    path: '/profile/lock',
    name: 'lock_profile',
    component: require('../pages/LockProfile').default
  },
  {
    path: '/file/edit/:id',
    name: 'edit_file',
    component: require('../pages/EditFile').default
  },
  {
    path: '/file/delete/:id',
    name: 'delete_file',
    component: require('../pages/DeleteFile').default
  },
  {
    path: '/file/download/:id',
    name: 'download_file',
    component: require('../pages/DownloadFile').default
  },
  {
    path: '/file/upload',
    name: 'upload_file',
    component: require('../pages/UploadFile').default
  },
  {
    path: '/file/create',
    name: 'create_file',
    component: require('../pages/CreateFile').default
  },
  {
    path: '/folder/create',
    name: 'create_folder',
    component: require('../pages/CreateFolder').default
  },
  {
    path: '/folder/delete/:id',
    name: 'delete_folder',
    component: require('../pages/DeleteFolder').default
  },
  {
    path: '/folder/edit/:id',
    name: 'edit_folder',
    component: require('../pages/EditFolder').default
  },
  {
    path: '/file/:id',
    name: 'view_file',
    component: require('../pages/ViewFile').default
  },
  {
    path: '/users',
    name: 'users',
    component: require('../pages/Users').default
  },
  {
    path: '/drive/:id',
    name: 'drive',
    component: require('../pages/Drive').default
  },
  {
    path: '/drive',
    name: 'my_drive',
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
