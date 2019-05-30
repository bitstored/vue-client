/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
// import config from 'config'
import {
  authHeader
} from '../router'
import {grpc, BrowserHeaders} from 'grpc-web-client'


const {
  LoginRequest,
  LoginResponse
} = require('../pb/user_service_pb')
const {
  AccountClient
} = require('../pb/user_service_grpc_web_pb')

export const userService = {
  data: {
    debug: true,
    ajaxRequest: false,
    postResults: []
  },
  methods: {

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
    },
    login: function (username, password) {

      const client = new AccountClient('http://localhost:8081', {}, {})
      const login_request = new LoginRequest()
      login_request.setUsername(username)
      login_request.setPassword(password)
      const requestOptions = {
        method: 'POST',
        body: JSON.stringify({
          'username': username,
          'password': password
        }),
        headers: {
          'mode': 'no-cors', // no-cors, cors, *same-origin
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
          'Content-Type': 'application/grpc',
          // 'cache': 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          // 'credentials': 'same-origin',
        }
      }
      client.login(login_request, requestOptions, (response, error) => {
        console.log(response, error)
      })


      // return fetch('https://localhost:5008/user/api/v1/login', requestOptions)
      //   .then(err => {
      //     console.log('err', err)
      //   })
      //   .then(user => {
      //     console.log('user', user)
      //     // login successful if there's a jwt token in the response
      //     if (user.token) {
      //       // store user details and jwt token in local storage to keep user logged in between page refreshes
      //       localStorage.setItem('user', JSON.stringify(user))
      //     }

      //     return ''
      //   })
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
    }
  }
}
