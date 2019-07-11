/* eslint-disable no-unused-vars */
import { userService } from '../services'
import { router } from '../router'
const state = {
  user: null
}

const actions = {
  getAll({ commit }) {
    commit('getAllRequest')

    userService.getAll()
      .then(
        users => commit('getAllSuccess', users),
        error => commit('getAllFailure', error)
      )
  },

  _delete({ commit }) {
    commit('deleteRequest')
    var token = localStorage.getItem('token')
    userService.methods._delete(token)
      .then(
        ok => {
          localStorage.clear()
          router.go('/login')
          commit('deleteSuccess', token)
        }
      )
      .catch(
        err => {
          // eslint-disable-next-line no-console
          console.log(err)
          alert('Unable to delete account')
        }
      )
  },

  getByToken({ commit}, token) {
    commit('getByTokenRequest', token)
    return new Promise(function (resolve, reject) {
      userService.methods.getByToken(token)
        .then(
          user => {
            if (user != null) {
              localStorage.setItem('user_id', user.getCreated())
              resolve(user)
            } else {
              this.loggedIn = false
              localStorage.removeItem('token')
              router.go('/login')
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
  getAllRequest(state) {
    state.all = { loading: true }
  },
  getAllSuccess(state, users) {
    state.all = { items: users }
  },
  getAllFailure(state, error) {
    state.all = { error }
  },
  getFailure(state, error) {
    state.user = {
      error
    }
  },
  getSuccess(state, user) {
    state.user = {
      user
    }
  },
  deleteRequest(state, id) {
    // add 'deleting:true' property to user being deleted
    state = {}
  },
  getByTokenRequest(state, id) {

  },
  deleteSuccess(state, id) {
    // remove deleted user from state
  },
  deleteFailure(state, { id, error }) {
    // remove 'deleting:true' property and add 'deleteError:[error]' property to user
    state.all.items = state.items.map(user => {
      if (user.id === id) {
        // make copy of user without 'deleting:true' property
        const { deleting, userCopy } = user
        // return copy of user with 'deleteError:[error]' property
        return { userCopy, deleteError: error }
      }

      return user
    })
  }
}

export const users = {
  namespaced: true,
  state,
  actions,
  mutations
}
