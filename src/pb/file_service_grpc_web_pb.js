/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/**
 * @fileoverview gRPC-Web generated client stub for file_service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {}
grpc.web = require('grpc-web')

const proto = {}
proto.file_service = require('./file_service_pb.js')

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.file_service.FileManagementClient =
    function(hostname, credentials, options) {
      if (!options) options = {}
      options['format'] = 'text'

      /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
      this.client_ = new grpc.web.GrpcWebClientBase(options)

      /**
   * @private @const {string} The hostname
   */
      this.hostname_ = hostname

      /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
      this.credentials_ = credentials

      /**
   * @private @const {?Object} Options for the client
   */
      this.options_ = options
    }


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.file_service.FileManagementPromiseClient =
    function(hostname, credentials, options) {
      if (!options) options = {}
      options['format'] = 'text'

      /**
   * @private @const {!proto.file_service.FileManagementClient} The delegate callback based client
   */
      this.delegateClient_ = new proto.file_service.FileManagementClient(
        hostname, credentials, options)

    }


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.file_service.CreateDriveRequest,
 *   !proto.file_service.CreateDriveResponse>}
 */
const methodInfo_FileManagement_CreateDrive = new grpc.web.AbstractClientBase.MethodInfo(
  proto.file_service.CreateDriveResponse,
  /** @param {!proto.file_service.CreateDriveRequest} request */
  function(request) {
    return request.serializeBinary()
  },
  proto.file_service.CreateDriveResponse.deserializeBinary
)


/**
 * @param {!proto.file_service.CreateDriveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.file_service.CreateDriveResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.file_service.CreateDriveResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.file_service.FileManagementClient.prototype.createDrive =
    function(request, metadata, callback) {
      return this.client_.rpcCall(this.hostname_ +
      '/file_service.FileManagement/CreateDrive',
      request,
      metadata,
      methodInfo_CreateDrive,
      callback)
    }


/**
 * @param {!proto.file_service.CreateDriveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.file_service.CreateDriveResponse>}
 *     A native promise that resolves to the response
 */
proto.file_service.FileManagementPromiseClient.prototype.createDrive =
    function(request, metadata) {
      return new Promise((resolve, reject) => {
        this.delegateClient_.createDrive(
          request, metadata, (error, response) => {
            error ? reject(error) : resolve(response)
          })
      })
    }


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.file_service.CreateNewFileRequest,
 *   !proto.file_service.CreateNewFileResponse>}
 */
const methodInfo_FileManagement_CreateNewFile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.file_service.CreateNewFileResponse,
  /** @param {!proto.file_service.CreateNewFileRequest} request */
  function(request) {
    return request.serializeBinary()
  },
  proto.file_service.CreateNewFileResponse.deserializeBinary
)


/**
 * @param {!proto.file_service.CreateNewFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.file_service.CreateNewFileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.file_service.CreateNewFileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.file_service.FileManagementClient.prototype.createNewFile =
    function(request, metadata, callback) {
      return this.client_.rpcCall(this.hostname_ +
      '/file_service.FileManagement/CreateNewFile',
      request,
      metadata,
      methodInfo_CreateNewFile,
      callback)
    }


/**
 * @param {!proto.file_service.CreateNewFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.file_service.CreateNewFileResponse>}
 *     A native promise that resolves to the response
 */
proto.file_service.FileManagementPromiseClient.prototype.createNewFile =
    function(request, metadata) {
      return new Promise((resolve, reject) => {
        this.delegateClient_.createNewFile(
          request, metadata, (error, response) => {
            error ? reject(error) : resolve(response)
          })
      })
    }


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.file_service.CreateNewFolderRequest,
 *   !proto.file_service.CreateNewFolderResponse>}
 */
const methodInfo_FileManagement_CreateNewFolder = new grpc.web.AbstractClientBase.MethodInfo(
  proto.file_service.CreateNewFolderResponse,
  /** @param {!proto.file_service.CreateNewFolderRequest} request */
  function(request) {
    return request.serializeBinary()
  },
  proto.file_service.CreateNewFolderResponse.deserializeBinary
)


/**
 * @param {!proto.file_service.CreateNewFolderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.file_service.CreateNewFolderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.file_service.CreateNewFolderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.file_service.FileManagementClient.prototype.createNewFolder =
    function(request, metadata, callback) {
      return this.client_.rpcCall(this.hostname_ +
      '/file_service.FileManagement/CreateNewFolder',
      request,
      metadata,
      methodInfo_CreateNewFolder,
      callback)
    }


/**
 * @param {!proto.file_service.CreateNewFolderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.file_service.CreateNewFolderResponse>}
 *     A native promise that resolves to the response
 */
proto.file_service.FileManagementPromiseClient.prototype.createNewFolder =
    function(request, metadata) {
      return new Promise((resolve, reject) => {
        this.delegateClient_.createNewFolder(
          request, metadata, (error, response) => {
            error ? reject(error) : resolve(response)
          })
      })
    }


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.file_service.GetFolderContentRequest,
 *   !proto.file_service.GetFolderContentResponse>}
 */
const methodInfo_FileManagement_GetFolderContent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.file_service.GetFolderContentResponse,
  /** @param {!proto.file_service.GetFolderContentRequest} request */
  function(request) {
    return request.serializeBinary()
  },
  proto.file_service.GetFolderContentResponse.deserializeBinary
)


/**
 * @param {!proto.file_service.GetFolderContentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.file_service.GetFolderContentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.file_service.GetFolderContentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.file_service.FileManagementClient.prototype.getFolderContent =
    function(request, metadata, callback) {
      return this.client_.rpcCall(this.hostname_ +
      '/file_service.FileManagement/GetFolderContent',
      request,
      metadata,
      methodInfo_GetFolderContent,
      callback)
    }


/**
 * @param {!proto.file_service.GetFolderContentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.file_service.GetFolderContentResponse>}
 *     A native promise that resolves to the response
 */
proto.file_service.FileManagementPromiseClient.prototype.getFolderContent =
    function(request, metadata) {
      return new Promise((resolve, reject) => {
        this.delegateClient_.getFolderContent(
          request, metadata, (error, response) => {
            error ? reject(error) : resolve(response)
          })
      })
    }


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.file_service.GetFileContentRequest,
 *   !proto.file_service.GetFileContentResponse>}
 */
const methodInfo_FileManagement_GetFileContent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.file_service.GetFileContentResponse,
  /** @param {!proto.file_service.GetFileContentRequest} request */
  function(request) {
    return request.serializeBinary()
  },
  proto.file_service.GetFileContentResponse.deserializeBinary
)


/**
 * @param {!proto.file_service.GetFileContentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.file_service.GetFileContentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.file_service.GetFileContentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.file_service.FileManagementClient.prototype.getFileContent =
    function(request, metadata, callback) {
      return this.client_.rpcCall(this.hostname_ +
      '/file_service.FileManagement/GetFileContent',
      request,
      metadata,
      methodInfo_GetFileContent,
      callback)
    }


/**
 * @param {!proto.file_service.GetFileContentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.file_service.GetFileContentResponse>}
 *     A native promise that resolves to the response
 */
proto.file_service.FileManagementPromiseClient.prototype.getFileContent =
    function(request, metadata) {
      return new Promise((resolve, reject) => {
        this.delegateClient_.getFileContent(
          request, metadata, (error, response) => {
            error ? reject(error) : resolve(response)
          })
      })
    }


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.file_service.GetFileTreeRequest,
 *   !proto.file_service.GetFileTreeResponse>}
 */
const methodInfo_FileManagement_GetFileTree = new grpc.web.AbstractClientBase.MethodInfo(
  proto.file_service.GetFileTreeResponse,
  /** @param {!proto.file_service.GetFileTreeRequest} request */
  function(request) {
    return request.serializeBinary()
  },
  proto.file_service.GetFileTreeResponse.deserializeBinary
)


/**
 * @param {!proto.file_service.GetFileTreeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.file_service.GetFileTreeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.file_service.GetFileTreeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.file_service.FileManagementClient.prototype.getFileTree =
    function(request, metadata, callback) {
      return this.client_.rpcCall(this.hostname_ +
      '/file_service.FileManagement/GetFileTree',
      request,
      metadata,
      methodInfo_GetFileTree,
      callback)
    }


/**
 * @param {!proto.file_service.GetFileTreeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.file_service.GetFileTreeResponse>}
 *     A native promise that resolves to the response
 */
proto.file_service.FileManagementPromiseClient.prototype.getFileTree =
    function(request, metadata) {
      return new Promise((resolve, reject) => {
        this.delegateClient_.getFileTree(
          request, metadata, (error, response) => {
            error ? reject(error) : resolve(response)
          })
      })
    }


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.file_service.UpdateFileContentRequest,
 *   !proto.file_service.UpdateFileContentResponse>}
 */
const methodInfo_FileManagement_UpdateFileContent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.file_service.UpdateFileContentResponse,
  /** @param {!proto.file_service.UpdateFileContentRequest} request */
  function(request) {
    return request.serializeBinary()
  },
  proto.file_service.UpdateFileContentResponse.deserializeBinary
)


/**
 * @param {!proto.file_service.UpdateFileContentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.file_service.UpdateFileContentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.file_service.UpdateFileContentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.file_service.FileManagementClient.prototype.updateFileContent =
    function(request, metadata, callback) {
      return this.client_.rpcCall(this.hostname_ +
      '/file_service.FileManagement/UpdateFileContent',
      request,
      metadata,
      methodInfo_UpdateFileContent,
      callback)
    }


/**
 * @param {!proto.file_service.UpdateFileContentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.file_service.UpdateFileContentResponse>}
 *     A native promise that resolves to the response
 */
proto.file_service.FileManagementPromiseClient.prototype.updateFileContent =
    function(request, metadata) {
      return new Promise((resolve, reject) => {
        this.delegateClient_.updateFileContent(
          request, metadata, (error, response) => {
            error ? reject(error) : resolve(response)
          })
      })
    }


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.file_service.DeleteFileRequest,
 *   !proto.file_service.DeleteFileResponse>}
 */
const methodInfo_FileManagement_DeleteFile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.file_service.DeleteFileResponse,
  /** @param {!proto.file_service.DeleteFileRequest} request */
  function(request) {
    return request.serializeBinary()
  },
  proto.file_service.DeleteFileResponse.deserializeBinary
)


/**
 * @param {!proto.file_service.DeleteFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.file_service.DeleteFileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.file_service.DeleteFileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.file_service.FileManagementClient.prototype.deleteFile =
    function(request, metadata, callback) {
      return this.client_.rpcCall(this.hostname_ +
      '/file_service.FileManagement/DeleteFile',
      request,
      metadata,
      methodInfo_DeleteFile,
      callback)
    }


/**
 * @param {!proto.file_service.DeleteFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.file_service.DeleteFileResponse>}
 *     A native promise that resolves to the response
 */
proto.file_service.FileManagementPromiseClient.prototype.deleteFile =
    function(request, metadata) {
      return new Promise((resolve, reject) => {
        this.delegateClient_.deleteFile(
          request, metadata, (error, response) => {
            error ? reject(error) : resolve(response)
          })
      })
    }


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.file_service.RenameFileRequest,
 *   !proto.file_service.RenameFileResponse>}
 */
const methodInfo_FileManagement_RenameFile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.file_service.RenameFileResponse,
  /** @param {!proto.file_service.RenameFileRequest} request */
  function(request) {
    return request.serializeBinary()
  },
  proto.file_service.RenameFileResponse.deserializeBinary
)


/**
 * @param {!proto.file_service.RenameFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.file_service.RenameFileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.file_service.RenameFileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.file_service.FileManagementClient.prototype.renameFile =
    function(request, metadata, callback) {
      return this.client_.rpcCall(this.hostname_ +
      '/file_service.FileManagement/RenameFile',
      request,
      metadata,
      methodInfo_RenameFile,
      callback)
    }


/**
 * @param {!proto.file_service.RenameFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.file_service.RenameFileResponse>}
 *     A native promise that resolves to the response
 */
proto.file_service.FileManagementPromiseClient.prototype.renameFile =
    function(request, metadata) {
      return new Promise((resolve, reject) => {
        this.delegateClient_.renameFile(
          request, metadata, (error, response) => {
            error ? reject(error) : resolve(response)
          })
      })
    }


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.file_service.MoveFileRequest,
 *   !proto.file_service.MoveFileResponse>}
 */
const methodInfo_FileManagement_MoveFile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.file_service.MoveFileResponse,
  /** @param {!proto.file_service.MoveFileRequest} request */
  function(request) {
    return request.serializeBinary()
  },
  proto.file_service.MoveFileResponse.deserializeBinary
)


/**
 * @param {!proto.file_service.MoveFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.file_service.MoveFileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.file_service.MoveFileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.file_service.FileManagementClient.prototype.moveFile =
    function(request, metadata, callback) {
      return this.client_.rpcCall(this.hostname_ +
      '/file_service.FileManagement/MoveFile',
      request,
      metadata,
      methodInfo_MoveFile,
      callback)
    }


/**
 * @param {!proto.file_service.MoveFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.file_service.MoveFileResponse>}
 *     A native promise that resolves to the response
 */
proto.file_service.FileManagementPromiseClient.prototype.moveFile =
    function(request, metadata) {
      return new Promise((resolve, reject) => {
        this.delegateClient_.moveFile(
          request, metadata, (error, response) => {
            error ? reject(error) : resolve(response)
          })
      })
    }


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.file_service.UploadFileRequest,
 *   !proto.file_service.UploadFileResponse>}
 */
const methodInfo_FileManagement_UploadFile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.file_service.UploadFileResponse,
  /** @param {!proto.file_service.UploadFileRequest} request */
  function(request) {
    return request.serializeBinary()
  },
  proto.file_service.UploadFileResponse.deserializeBinary
)


/**
 * @param {!proto.file_service.UploadFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.file_service.UploadFileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.file_service.UploadFileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.file_service.FileManagementClient.prototype.uploadFile =
    function(request, metadata, callback) {
      return this.client_.rpcCall(this.hostname_ +
      '/file_service.FileManagement/UploadFile',
      request,
      metadata,
      methodInfo_UploadFile,
      callback)
    }


/**
 * @param {!proto.file_service.UploadFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.file_service.UploadFileResponse>}
 *     A native promise that resolves to the response
 */
proto.file_service.FileManagementPromiseClient.prototype.uploadFile =
    function(request, metadata) {
      return new Promise((resolve, reject) => {
        this.delegateClient_.uploadFile(
          request, metadata, (error, response) => {
            error ? reject(error) : resolve(response)
          })
      })
    }


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.file_service.ShareFileRequest,
 *   !proto.file_service.ShareFileResponse>}
 */
const methodInfo_FileManagement_ShareFile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.file_service.ShareFileResponse,
  /** @param {!proto.file_service.ShareFileRequest} request */
  function(request) {
    return request.serializeBinary()
  },
  proto.file_service.ShareFileResponse.deserializeBinary
)


/**
 * @param {!proto.file_service.ShareFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.file_service.ShareFileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.file_service.ShareFileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.file_service.FileManagementClient.prototype.shareFile =
    function(request, metadata, callback) {
      return this.client_.rpcCall(this.hostname_ +
      '/file_service.FileManagement/ShareFile',
      request,
      metadata,
      methodInfo_ShareFile,
      callback)
    }


/**
 * @param {!proto.file_service.ShareFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.file_service.ShareFileResponse>}
 *     A native promise that resolves to the response
 */
proto.file_service.FileManagementPromiseClient.prototype.shareFile =
    function(request, metadata) {
      return new Promise((resolve, reject) => {
        this.delegateClient_.shareFile(
          request, metadata, (error, response) => {
            error ? reject(error) : resolve(response)
          })
      })
    }


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.file_service.DownloadFileRequest,
 *   !proto.file_service.DownloadFileResponse>}
 */
const methodInfo_FileManagement_DownloadFile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.file_service.DownloadFileResponse,
  /** @param {!proto.file_service.DownloadFileRequest} request */
  function(request) {
    return request.serializeBinary()
  },
  proto.file_service.DownloadFileResponse.deserializeBinary
)


/**
 * @param {!proto.file_service.DownloadFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.file_service.DownloadFileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.file_service.DownloadFileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.file_service.FileManagementClient.prototype.downloadFile =
    function(request, metadata, callback) {
      return this.client_.rpcCall(this.hostname_ +
      '/file_service.FileManagement/DownloadFile',
      request,
      metadata,
      methodInfo_DownloadFile,
      callback)
    }


/**
 * @param {!proto.file_service.DownloadFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.file_service.DownloadFileResponse>}
 *     A native promise that resolves to the response
 */
proto.file_service.FileManagementPromiseClient.prototype.downloadFile =
    function(request, metadata) {
      return new Promise((resolve, reject) => {
        this.delegateClient_.downloadFile(
          request, metadata, (error, response) => {
            error ? reject(error) : resolve(response)
          })
      })
    }


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.file_service.ComputeSizeRequest,
 *   !proto.file_service.ComputeSizeResponse>}
 */
const methodInfo_FileManagement_ComputeSize = new grpc.web.AbstractClientBase.MethodInfo(
  proto.file_service.ComputeSizeResponse,
  /** @param {!proto.file_service.ComputeSizeRequest} request */
  function(request) {
    return request.serializeBinary()
  },
  proto.file_service.ComputeSizeResponse.deserializeBinary
)


/**
 * @param {!proto.file_service.ComputeSizeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.file_service.ComputeSizeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.file_service.ComputeSizeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.file_service.FileManagementClient.prototype.computeSize =
    function(request, metadata, callback) {
      return this.client_.rpcCall(this.hostname_ +
      '/file_service.FileManagement/ComputeSize',
      request,
      metadata,
      methodInfo_ComputeSize,
      callback)
    }


/**
 * @param {!proto.file_service.ComputeSizeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.file_service.ComputeSizeResponse>}
 *     A native promise that resolves to the response
 */
proto.file_service.FileManagementPromiseClient.prototype.computeSize =
    function(request, metadata) {
      return new Promise((resolve, reject) => {
        this.delegateClient_.computeSize(
          request, metadata, (error, response) => {
            error ? reject(error) : resolve(response)
          })
      })
    }


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.file_service.GetMyDriveIdRequest,
 *   !proto.file_service.GetMyDriveIdResponse>}
 */
const methodInfo_FileManagement_GetMyDriveId = new grpc.web.AbstractClientBase.MethodInfo(
  proto.file_service.GetMyDriveIdResponse,
  /** @param {!proto.file_service.GetMyDriveIdRequest} request */
  function(request) {
    return request.serializeBinary()
  },
  proto.file_service.GetMyDriveIdResponse.deserializeBinary
)


/**
 * @param {!proto.file_service.GetMyDriveIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.file_service.GetMyDriveIdResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.file_service.GetMyDriveIdResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.file_service.FileManagementClient.prototype.getMyDriveId =
    function(request, metadata, callback) {
      return this.client_.rpcCall(this.hostname_ +
      '/file_service.FileManagement/GetMyDriveId',
      request,
      metadata,
      methodInfo_GetMyDriveId,
      callback)
    }


/**
 * @param {!proto.file_service.GetMyDriveIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.file_service.GetMyDriveIdResponse>}
 *     A native promise that resolves to the response
 */
proto.file_service.FileManagementPromiseClient.prototype.getMyDriveId =
    function(request, metadata) {
      return new Promise((resolve, reject) => {
        this.delegateClient_.getMyDriveId(
          request, metadata, (error, response) => {
            error ? reject(error) : resolve(response)
          })
      })
    }


module.exports = proto.file_service

