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
    commit('uploadRequest', file.name)
    var userId = localStorage.getItem('user_id')
    file.parent = localStorage.getItem('last_folder')
    console.log(file.data)
    fileService.methods.uploadFile(file, userId)
      .then(
        rsp => {
          commit('uploadSuccess', file.name)
          console.log('upload rsp', rsp)
          setTimeout(() => {
            dispatch('alert/success', 'Upload successful', { root: true })
          })
          router.push('/drive')

        }
      )
      .catch(
        error => {
          commit('uploadFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  },
  createFile({ dispatch, commit }, file) {
    commit('uploadRequest', file.name)
    var userId = localStorage.getItem('user_id')
    file.parent = localStorage.getItem('last_folder')
    fileService.methods.uploadFile(file, userId)
      .then(
        rsp => {
          commit('uploadSuccess', file.name)
          router.push('/drive')
        }
      )
      .catch(
        error => {
          commit('uploadFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  },
  deleteFile({ dispatch, commit }, id) {
    commit('deleteRequest', id)
    var userId = localStorage.getItem('user_id')
    fileService.methods.deleteFile(id, userId)
      .then(
        rsp => {
          commit('deleteSuccess', id)
          router.push('/drive')
        }
      )
      .catch(
        error => {
          commit('deleteFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  },
  deleteFolder({ dispatch, commit }, id) {
    commit('deleteRequest', id)
    var userId = localStorage.getItem('user_id')
    fileService.methods.deleteFile(id, userId)
      .then(
        rsp => {
          commit('uploadSuccess', id)
          router.push('/drive')
        }
      )
      .catch(
        error => {
          commit('uploadFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  },
  downloadFile({ dispatch, commit }, {fileID, userID,password, watermarkingMessage, steganoMessage} ) {
    return new Promise(function (resolve, reject) {
      fileService.methods.downloadFile(fileID, userID, password, watermarkingMessage, steganoMessage)
        .then(
          rsp => {
            resolve(rsp)
          }
        )
        .catch(
          error => {
            commit('uploadFailure', error)
            dispatch('alert/error', error, { root: true })
            reject(error)
          }
        )
    })
  },

  computeSize({ dispatch, commit }) {
    var userId = localStorage.getItem('user_id')
    return new Promise(function (resolve, reject) {
      fileService.methods.computeSize(userId)
        .then(
          rsp => {
            resolve(rsp)
          }
        )
        .catch(
          error => {
            commit('uploadFailure', error)
            dispatch('alert/error', error, { root: true })
          }
        )
    })
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
              state.current = response.array[0]

              resolve(response)
            } else {
              router.push('/profile')
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
  },
  createFolder({commit}, {name, parent}) {
    console.log(name, parent)
    return new Promise(function (resolve, reject) {
      fileService.methods.createFolder(name, parent)
        .then(
          response => {
            if (response != null) {
              console.log(response)
              resolve(response)
              router.push('/drive')

            } else {
              router.push('/drive')
              alert('Unable to create new folder, redirecting')
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
  },
  getFolderContent({ commit }, {driveId, userId}) {
    return new Promise(function (resolve, reject) {
      fileService.methods.getFolderContent(driveId, userId)
        .then(
          response => {
            if (response != null) {
              console.log(response)
              resolve(response)
            } else {
              router.push('/drive')
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
  uploadRequest(state, name) {
    state.status = {
      uploading: true,
    }
  },
  uploadSuccess(state, name) {
    state.status = {
      uploaded: true,
    }
  },
  deleteRequest(state, id) {
    state.status = {
      deleteing: true,
    }
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
