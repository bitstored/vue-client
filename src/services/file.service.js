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
  UploadFileRequest,
  GetFolderContentRequest,
  GetMyDriveIdRequest,
} = require('../pb/file_service_pb')
const {
  FileManagementClient
} = require('../pb/file_service_grpc_web_pb')
const client = new FileManagementClient('http://localhost:8081', {}, {})
export const fileService = {
  data: {
    debug: true,
    ajaxRequest: false,
    postResults: []
  },
  methods: {
    uploadFile: function(file, userid, secret) {
      const request = new UploadFileRequest()
      const rpc_file = new File()
      rpc_file.setParentIdentifier(file.parent)
      rpc_file.setName(file.name)
      rpc_file.setType(file.type)

      request.setFile(rpc_file)
      request.setUserId(userid)
      request.setSecretPhrase(secret)
      const requestOptions = {
        method: 'POST',
        body: JSON.stringify({
          'file': rpc_file,
          'userId': userid,
          'secretPhrase': secret
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
        client.uploadFile(request, requestOptions, (error, response) => {
          if (error != null) {
            console.log('err', error)
            reject(error)
          } else {
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
