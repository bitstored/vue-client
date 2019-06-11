/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import {
  fileService
} from '../services'
import {
  router
} from '../router'

const session_token = localStorage.getItem('token')
const state = session_token != null ?
  {
    status: {
      loggedIn: true
    },
    session_token
  } :
  {
    status: {},
    user: null
  }

const actions = {
  getDriveId({
    commit
  }, userId) {
    return new Promise(function (resolve, reject) {
      fileService.methods.getDriveId(userId)
        .then(
          response => {
            if (response != null) {
              //commit('getSuccess', {state, user})
              resolve(response)
            } else {
              router.go('/profile')
            }
          }
        )
        .catch(
          error => {
            reject(error)
            commit('getFailure', {
              state,
              error: error.toString()
            })
          }
        )
    })
  }
}

const mutations = {
  loginRequest(state, user) {
    state.status = {
      loggingIn: true
    }
    state.user = user
  },
  loginSuccess(state, user) {
    state.status = {
      loggedIn: true
    }
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
    state.status = {
      registering: true
    }
  },
  registerSuccess(state, user) {
    state.status = {}
  },
  registerFailure(state, error) {
    state.status = {}
  }
}

export const files = {
  namespaced: true,
  state,
  actions,
  mutations
}
