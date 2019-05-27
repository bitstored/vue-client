/* eslint-disable no-unused-vars */
// import config from 'config'
import {
  authHeader
} from '../router'

const {
  LoginRequest,
  LoginResponse
} = require('../pb/user_service_pb')
const {
  AccountClient
} = require('../pb/user_service_grpc_web_pb')

export const userService = {
  methods: {
    login: function (username, password) {

      const client = new AccountClient('http://localhost:5008', {}, {})

      const request = new LoginRequest()
      request.setUsername(username)
      request.setPassword(password)
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      }
      client.login(request, requestOptions, () => {}) //eslint-disable-line


      // return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
      //     .then(handleResponse)
      //     .then(user => {
      //         // login successful if there's a jwt token in the response
      //         if (user.token) {
      //             // store user details and jwt token in local storage to keep user logged in between page refreshes
      //             localStorage.setItem('user', JSON.stringify(user))
      //         }

      return ''
      //     })
    },

    logout: function () {
      // remove user from local storage to log user out
      localStorage.removeItem('user')
    },

    register: function (user) {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      }
      // return fetch(`${config.apiUrl}/users/register`, requestOptions).then(handleResponse)
    },

    getAll: function () {
      const requestOptions = {
        method: 'GET',
        headers: authHeader()
      }

      //return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse)
    },


    getById: function (id) {
      const requestOptions = {
        method: 'GET',
        headers: authHeader()
      }

      // return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse)
    },

    update: function (user) {
      const requestOptions = {
        method: 'PUT',
        headers: authHeader(), // { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      }

      // return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse)
    },

    // prefixed function name with underscore because delete is a reserved word in javascript
    _delete: function (id) {
      const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
      }

      // return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse)
    },

    handleResponse: function (response) {
      return response.text().then(text => {
        const data = text && JSON.parse(text)
        if (!response.ok) {
          if (response.status === 401) {
            // auto logout if 401 response returned from api
            this.logout()
            location.reload(true)
          }

          const error = (data && data.message) || response.statusText
          return Promise.reject(error)
        }

        return data
      })
    }
  }
}
