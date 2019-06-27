/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
// import config from 'config'
import {
  authHeader
} from '../router'
import {grpc, BrowserHeaders} from 'grpc-web-client'


const {
  LoginRequest,
  LogoutRequest,
  UpdateAccountRequest,
  UpdateAccountResponse,
  CreateAccountRequest,
  GetAccountRequest,
  User,
} = require('../pb/user_service_pb')
const {
  AccountClient
} = require('../pb/user_service_grpc_web_pb')
const client = new AccountClient('http://localhost:8081', {}, {})
const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {})
enableDevTools([
  client,
])
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
        }
      }

      return new Promise(function (resolve, reject) {
        client.login(login_request, requestOptions, (error, response) => {
          var token = response == null ? null : response.getSessionToken()

          if (error != null) {
            console.log('err', error)
            reject(error)
          } else {
            localStorage.setItem('token', token)
            resolve(response)
          }
        }
        )
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
      const logout_request = new LogoutRequest()
      const requestOptions = {
        method: 'GET',
        headers: {
          'mode': 'no-cors', // no-cors, cors, *same-origin
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
          'Content-Type': 'application/grpc',
        }
      }

      return new Promise(function (resolve, reject) {
        client.logout(logout_request, requestOptions, (error, response) => {
          if (error != null) {
            console.log('err', error)
            localStorage.removeItem('token')
            reject(error)
          } else {
            localStorage.removeItem('token')
          }
        })
      })
      // remove user from local storage to log user out
    },

    register: function (user) {
      const request = new CreateAccountRequest()
      const proto_user = new User()
      proto_user.setFirstName(user.firstName)
      proto_user.setLastName(user.lastName)
      proto_user.setUsername(user.username)
      proto_user.setPassword(user.password)
      proto_user.setBirthday(user.birthday + 'T00:00:00.000Z')
      proto_user.setPhoto(btoa(unescape(encodeURIComponent(user.photo))))
      proto_user.setEmail(user.email)
      proto_user.setPhoneNumber(user.phoneNumber)

      request.setUser(proto_user)
      const requestOptions = {
        method: 'POST',
        // body: JSON.stringify({
        //   'username': username,
        //   'password': password
        // }),
        headers: {
          'mode': 'no-cors', // no-cors, cors, *same-origin
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
          'Content-Type': 'application/grpc',
        }
      }

      return new Promise(function (resolve, reject) {
        client.createAccount(request, requestOptions, (error, response) => {

          if (error != null) {
            console.log('err', error)
            reject(error)
          } else {
            localStorage.setItem('user_id', JSON.stringify(response.getUserId()))
            console.log('Success')
            resolve(response)
          }
        }
        )
      })
    },

    getAll: function () {
      const requestOptions = {
        method: 'GET',
        headers: authHeader()
      }

      //return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse)
    },


    getByToken: function (token) {
      const request = new GetAccountRequest()
      request.setId(token)
      const requestOptions = {
        method: 'GET',
        // body: JSON.stringify({
        //   'username': username,
        //   'password': password
        // }),
        headers: {
          'mode': 'no-cors', // no-cors, cors, *same-origin
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
          'Content-Type': 'application/grpc',
        }
      }

      return new Promise(function (resolve, reject) {
        client.getAccount(request, requestOptions, (error, response) => {
          console.log('plm\n\n\n\n', response, error)
          if (error != null) {
            console.log('err', error)
            reject(error)
          } else {
            resolve(response.getUser())
          }
        })
      })
    },

    update: function (user) {
      const requestOptions = {
        method: 'PUT',
        headers: {
          ...authHeader(),
          'mode': 'no-cors',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
          'Content-Type': 'application/grpc',
        },
        body: JSON.stringify(user)
      }
      const updateRequest = new UpdateAccountRequest()
      updateRequest.setUser(user)

      return new Promise(function (resolve, reject) {
        client.updateAccount(updateRequest, requestOptions, (error, response) => {
          console.log('update done')
        }
        )
      })
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
