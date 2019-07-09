/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import {
  fileService, userService
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
  upload({ dispatch, commit }, file) {
    console.log(file)
    commit('uploadRequest', file.name)
    fileService.methods.uploadFile(file, 1)
      .then(
        rsp => {
          commit('uploadSuccess', file.name)
          console.log('upload rsp', rsp)
          setTimeout(() => {
            dispatch('alert/success', 'Upload successful', { root: true })
          })
        }
      )
      .catch(
        error => {
          commit('uploadFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  },
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
  uploadRequest(state, user) {
  },
  uploadSuccess(state, user) {
  },
  uploadFailure(state) {
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
