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
  DeleteFileRequest,
  UploadFileRequest,
  GetFolderContentRequest,
  GetMyDriveIdRequest,
  CreateNewFolderRequest,
  ComputeSizeRequest,
  UpdateFileContentRequest,
  RenameFileRequest,
  DownloadFileRequest,
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
      rpc_file.setContent(file.data)

      if (file.type =='pdf') {
        type = Type.PDF
      }
      if (file.type == 'png') {
        type = Type.IMAGE

        rpc_file.setContent(file.data)
      }
      if (file.Type == 'txt') {
        type = Type.TXT
        rpc_file.setContent(file.data)

      }
      rpc_file.setFileType(type)
      rpc_file.setWritable(file.is_writable)
      rpc_file.setPrivate(file.is_private)

      request.setFile(rpc_file)
      request.setUserId(userid)
      request.setSecretPhrase(file.secret)
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
            //console.log(response.getContent())
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
            //console.log(response)
            resolve(response)
          }
        })
      })
    },
    deleteFile: function (fileID, userID) {
      const request = new DeleteFileRequest()

      request.setUserId(localStorage.getItem('user_id'))
      request.setIdentifier(fileID)
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
        client.deleteFile(request, requestOptions, (error, response) => {
          if (error != null) {
            console.log('err', error)
            reject(error)
          } else {
            //console.log(response)
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
    rename: function (identifier, name, userId) {
      const request = new RenameFileRequest()

      request.setUserId(userId)
      request.setName(name)
      request.setIdentifier(identifier)
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
        client.renameFile(request, requestOptions, (error, response) => {
          if (error != null) {
            console.log('err', error)
            reject(error)
          } else {
            resolve(response)
          }
        })
      })
    },
    updateContent: function (identifier, content, password, userId) {
      const request = new UpdateFileContentRequest()

      request.setUserId(userId)
      request.setIdentifier(identifier)
      request.setFileType(3)
      request.setNewContent(content)
      request.setSecretKey(password)
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
        client.updateFileContent(request, requestOptions, (error, response) => {
          if (error != null) {
            console.log('err', error)
            reject(error)
          } else {
            resolve(response)
          }
        })
      })
    },
    computeSize: function (userID) {
      const request = new ComputeSizeRequest()

      request.setUserId(userID)
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
        client.computeSize(request, requestOptions, (error, response) => {
          if (error != null) {
            console.log('err', error)
            reject(error)
          } else {
            resolve(response)
          }
        })
      })
    },
    downloadFile: function( fileID, userID, password, watermarkingMessage, steganoMessage) {
      const request = new DownloadFileRequest()

      request.setUserId(userID)
      request.setIdentifier(fileID)
      request.setSecretPhrase(password)
      request.setWatermarkMessage(watermarkingMessage)
      request.setSteganoMessage(steganoMessage)
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
        client.downloadFile(request, requestOptions, (error, response) => {
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
