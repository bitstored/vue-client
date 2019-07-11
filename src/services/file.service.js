/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import {
  authHeader
} from '../router'
import {
  grpc,
  BrowserHeaders
} from 'grpc-web-client'

const {
  File,
  Folder,
  Type,
  FSLevel,
  UploadFileRequest,
  GetFolderContentRequest,
  GetMyDriveIdRequest,
  CreateNewFolderRequest,
} = require('../pb/file_service_pb')

const {
  FileManagementClient
} = require('../pb/file_service_grpc_web_pb')

const client = new FileManagementClient('http://localhost:8081', {}, {})
const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {})
enableDevTools([
  client,
])
export const fileService = {
  data: {
    debug: true,
    ajaxRequest: false,
    postResults: []
  },
  methods: {
    uploadFile: function(file, userid) {

      const request = new UploadFileRequest()
      const rpc_file = new File()
      rpc_file.setParentIdentifier(file.parent)
      rpc_file.setName(file.name)
      var type = Type.OTHER
      if (file.type === 'pdf') {
        type = Type.PDF
      }
      rpc_file.setFileType(type)
      rpc_file.setContent(btoa(unescape(encodeURIComponent(file.data))))
      rpc_file.setWritable(file.is_writable)
      rpc_file.setPrivate(file.is_private)

      request.setFile(rpc_file)
      request.setUserId(userid)
      request.setSecretPhrase(file.secret)
      console.log(userid, '\n\n\n',request)
      const requestOptions = {
        method: 'POST',
        headers: {
          'mode': 'no-cors', // no-cors, cors, *same-origin
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
          'Content-Type': 'application/grpc',
        }
      }

      return new Promise(function (resolve, reject) {
        client.uploadFile(request, requestOptions, (error, response) => {
          if (error != null) {
            console.log('err', error)
            reject(error)
          } else {
            console.log('response', response)

            resolve(response)
          }
        })
      })
    },
    getFolderContent: function (folderId, userid) {
      const request = new GetFolderContentRequest()

      request.setUserId(userid)
      request.setIdentifier(folderId)
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
        client.getFolderContent(request, requestOptions, (error, response) => {
          if (error != null) {
            console.log('err', error)
            reject(error)
          } else {
            console.log(response.getContent())
            resolve(response)
          }
        })
      })
    },
    createFolder: function (name, parent) {
      const request = new CreateNewFolderRequest()
      const folder = new Folder()
      folder.setName(name)
      folder.setParentIdentifier(parent)

      request.setUserId(localStorage.getItem('user_id'))
      request.setFolder(folder)
      const requestOptions = {
        method: 'POST',
        headers: {
          'mode': 'no-cors', // no-cors, cors, *same-origin
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
          'Content-Type': 'application/grpc',
        }
      }

      return new Promise(function (resolve, reject) {
        client.createNewFolder(request, requestOptions, (error, response) => {
          if (error != null) {
            console.log('err', error)
            reject(error)
          } else {
            console.log(response)
            resolve(response)
          }
        })
      })
    },
    getDriveId: function (userid) {
      const request = new GetMyDriveIdRequest()

      request.setUserId(userid)
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
        client.getMyDriveId(request, requestOptions, (error, response) => {
          if (error != null) {
            console.log('err', error)
            reject(error)
          } else {
            resolve(response)
          }
        })
      })
    },
  }
}
