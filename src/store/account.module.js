/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { userService } from '../services'
import { router } from '../router'
import {getByToken} from './users.module'
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
          getByToken(token)
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
    router.push('/login')
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
            dispatch('alert/success', 'Registration successful', { root: true })
          })
        }
      )
      .catch(
        error => {
          console.log(error)
          commit('registerFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  },

  update({ dispatch, commit }, user) {
    commit('updateRequest', user)
    console.log(user.photo)

    userService.methods.update(user)
      .then(
        rsp => {
          commit('updateSuccess', user)
          router.push('/profile')
          console.log('update rsp', rsp)
          setTimeout(() => {
            dispatch('alert/success', 'Update successful', { root: true })
          })
        }
      )
      .catch(
        error => {
          commit('updateFailure', error)
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
  },
  updateRequest(state, user) {
    state.user = user
  },
  updateSuccess(state) {
    state.status = {}
  },
  updateFailure(state, error) {
    state.status = {}
  }
}

export const account = {
  namespaced: true,
  state,
  actions,
  mutations
}
