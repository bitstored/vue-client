<template>
  <header slot="toolbar">
    <div
      id="header-fixed"
      class="header-banner"
    >
      <div class="row">
        <div class="col-md-4">
          <router-link to="/">
            <img
              id="logo-fixed"
              src="../assets/logo.png"
            >
          </router-link>
        </div>
        <div
          id="slogan"
          class="col-md-6"
        >
          <h2>A secure solution for your data</h2>
        </div>
        <div
          id="login-buttons"
          class="col-md-2"
        >
          <router-link
            v-show="visible_login"
            to="/login" >
            Login
          </router-link>
          <router-link
            v-show="visible_login"
            to="/register" >
            Register
          </router-link>
          <button
            v-show="invisible_login"
            :onClick="logout" >
            Logout
          </button>
        </div>
      </div>
    </div>
    <div
      id="header-nav"
      class="header-nav"
    >
      <div
        id="header-title"
        class="header-title"
      >
        <img
          id="logo"
          src="../assets/logo.png"
          alt="BitStored logo"
        >
      </div>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions} from 'vuex'

document.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop >= 60) {
    document.getElementById('header-nav').classList.add('fixed-header')
    document.getElementById('header-title').classList.add('visible-title')
    document.getElementById('sidebar').style.top = '60px'
  } else {
    document.getElementById('header-nav').classList.remove('fixed-header')
    document.getElementById('header-title').classList.remove('visible-title')
  }
})
const session_token = localStorage.getItem('token')
const logged = session_token != 'undefined'
  ? { status: { loggedIn: true }, session_token }
  : { status: {}, user: null }

export default {
  name: 'BitsHeader',
  components: {

  },
  data() {
    return {
      visible_login: !logged,
      invisible_login: logged,
    }
  },
  computed: {
    ...mapState('account', ['status'])
  },
  methods: {
    ...mapActions('account', ['logout']),
    logout() {
      localStorage.removeItem('token')
      this.logout()
    }
  }
}
</script>

<style>
header {
  width: 100%;
}
.header-banner {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  align-content: flex-start;
  background-color: #eeeeee;
  height: 65px;
}
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.header-nav {
  position: fixed;
  background: #eeeeee;
  height: 60px;
  z-index: 1;
}
.header-nav div {
  font-size: 2rem;
  line-height: 60px;
  position: absolute;
  top: 0;
  left: 2%;
  visibility: hidden;
}
.visible-title {
  visibility: visible !important;
}

#slogan {
  color: #555555;
  align-self: center;
}
#logo {
  max-width: 300px;
  height: auto;
  align-self: flex-start;
  position: relative;
}
#logo-fixed {
  max-width: 300px;
  height: auto;
  align-self: flex-start;
  left: 4%;
  top: 6%;
  position: relative;
}
h3 {
  align-content: center;
  color: #555555;
}
#login-buttons {
  align-self: center;
  color: #555555;
}
</style>
