/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { userService } from '../services'
import { router } from '../router'

const session_token = localStorage.getItem('token')
const state = session_token != null
  ? { status: { loggedIn: true }, session_token }
  : { status: {}, user: null }

const actions = {
  login({ dispatch, commit }, { username, password }) {
    commit('loginRequest', { username })
    userService.methods.login(username, password)
      .then(
        token => {
          commit('loginSuccess', token)
          this.loggedIn = true
          router.push('/')
        }
      )
      .catch(
        error => {
          commit('loginFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  },

  logout({ commit }) {
    userService.methods.logout()
      .catch(
        error => {
          commit('logoutFailure', error)
        }
      )
    router.go('/login')
    commit('logout')
  },

  register({ dispatch, commit }, user) {
    commit('registerRequest', user)

    userService.methods.register(user)
      .then(
        rsp => {
          commit('registerSuccess', user)
          router.push('/login')
          console.log('register rsp', rsp)
          setTimeout(() => {
            // display success message after route change completes
            dispatch('alert/success', 'Registration successful', { root: true })
          })
        }
      )
      .catch(
        error => {
          commit('registerFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  }
}

const mutations = {
  loginRequest(state, user) {
    state.status = { loggingIn: true }
    state.user = user
  },
  loginSuccess(state, user) {
    state.status = { loggedIn: true }
    state.user = user
  },
  loginFailure(state) {
    state.status = {}
    state.user = null
  },
  logout(state) {
    state.status = {}
    state.user = null
  },
  registerRequest(state, user) {
    state.status = { registering: true }
  },
  registerSuccess(state, user) {
    state.status = {}
  },
  registerFailure(state, error) {
    state.status = {}
  }
}

export const account = {
  namespaced: true,
  state,
  actions,
  mutations
}
