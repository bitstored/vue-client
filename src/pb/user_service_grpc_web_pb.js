/**
 * @fileoverview gRPC-Web generated client stub for account_service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {}
grpc.web = require('grpc-web')

const proto = {}
proto.account_service = require('./user_service_pb.js')

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.account_service.AccountClient =
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
proto.account_service.AccountPromiseClient =
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.account_service.CreateAccountRequest,
 *   !proto.account_service.CreateAccountResponse>}
 */
const methodInfo_Account_CreateAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.account_service.CreateAccountResponse,
  /** @param {!proto.account_service.CreateAccountRequest} request */
  function(request) {
    return request.serializeBinary()
  },
  proto.account_service.CreateAccountResponse.deserializeBinary
)


/**
 * @param {!proto.account_service.CreateAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.account_service.CreateAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.account_service.CreateAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.account_service.AccountClient.prototype.createAccount =
    function(request, metadata, callback) {
      return this.client_.rpcCall(this.hostname_ +
      '/account_service.Account/CreateAccount',
      request,
      metadata || {},
      methodInfo_Account_CreateAccount,
      callback)
    }


/**
 * @param {!proto.account_service.CreateAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.account_service.CreateAccountResponse>}
 *     A native promise that resolves to the response
 */
proto.account_service.AccountPromiseClient.prototype.createAccount =
    function(request, metadata) {
      return this.client_.unaryCall(this.hostname_ +
      '/account_service.Account/CreateAccount',
      request,
      metadata || {},
      methodInfo_Account_CreateAccount)
    }


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.account_service.ResendActivationMailRequest,
 *   !proto.account_service.ResendActivationMailResponse>}
 */
const methodInfo_Account_ResendActivationMail = new grpc.web.AbstractClientBase.MethodInfo(
  proto.account_service.ResendActivationMailResponse,
  /** @param {!proto.account_service.ResendActivationMailRequest} request */
  function(request) {
    return request.serializeBinary()
  },
  proto.account_service.ResendActivationMailResponse.deserializeBinary
)


/**
 * @param {!proto.account_service.ResendActivationMailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.account_service.ResendActivationMailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.account_service.ResendActivationMailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.account_service.AccountClient.prototype.resendActivationMail =
    function(request, metadata, callback) {
      return this.client_.rpcCall(this.hostname_ +
      '/account_service.Account/ResendActivationMail',
      request,
      metadata || {},
      methodInfo_Account_ResendActivationMail,
      callback)
    }


/**
 * @param {!proto.account_service.ResendActivationMailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.account_service.ResendActivationMailResponse>}
 *     A native promise that resolves to the response
 */
proto.account_service.AccountPromiseClient.prototype.resendActivationMail =
    function(request, metadata) {
      return this.client_.unaryCall(this.hostname_ +
      '/account_service.Account/ResendActivationMail',
      request,
      metadata || {},
      methodInfo_Account_ResendActivationMail)
    }


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.account_service.ActivateAccountRequest,
 *   !proto.account_service.ActivateAccountResponse>}
 */
const methodInfo_Account_ActivateAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.account_service.ActivateAccountResponse,
  /** @param {!proto.account_service.ActivateAccountRequest} request */
  function(request) {
    return request.serializeBinary()
  },
  proto.account_service.ActivateAccountResponse.deserializeBinary
)


/**
 * @param {!proto.account_service.ActivateAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.account_service.ActivateAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.account_service.ActivateAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.account_service.AccountClient.prototype.activateAccount =
    function(request, metadata, callback) {
      return this.client_.rpcCall(this.hostname_ +
      '/account_service.Account/ActivateAccount',
      request,
      metadata || {},
      methodInfo_Account_ActivateAccount,
      callback)
    }


/**
 * @param {!proto.account_service.ActivateAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.account_service.ActivateAccountResponse>}
 *     A native promise that resolves to the response
 */
proto.account_service.AccountPromiseClient.prototype.activateAccount =
    function(request, metadata) {
      return this.client_.unaryCall(this.hostname_ +
      '/account_service.Account/ActivateAccount',
      request,
      metadata || {},
      methodInfo_Account_ActivateAccount)
    }


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.account_service.UpdateAccountRequest,
 *   !proto.account_service.UpdateAccountResponse>}
 */
const methodInfo_Account_UpdateAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.account_service.UpdateAccountResponse,
  /** @param {!proto.account_service.UpdateAccountRequest} request */
  function(request) {
    return request.serializeBinary()
  },
  proto.account_service.UpdateAccountResponse.deserializeBinary
)


/**
 * @param {!proto.account_service.UpdateAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.account_service.UpdateAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.account_service.UpdateAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.account_service.AccountClient.prototype.updateAccount =
    function(request, metadata, callback) {
      return this.client_.rpcCall(this.hostname_ +
      '/account_service.Account/UpdateAccount',
      request,
      metadata || {},
      methodInfo_Account_UpdateAccount,
      callback)
    }


/**
 * @param {!proto.account_service.UpdateAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.account_service.UpdateAccountResponse>}
 *     A native promise that resolves to the response
 */
proto.account_service.AccountPromiseClient.prototype.updateAccount =
    function(request, metadata) {
      return this.client_.unaryCall(this.hostname_ +
      '/account_service.Account/UpdateAccount',
      request,
      metadata || {},
      methodInfo_Account_UpdateAccount)
    }


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.account_service.DeleteAccountRequest,
 *   !proto.account_service.DeleteAccountResponse>}
 */
const methodInfo_Account_DeleteAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.account_service.DeleteAccountResponse,
  /** @param {!proto.account_service.DeleteAccountRequest} request */
  function(request) {
    return request.serializeBinary()
  },
  proto.account_service.DeleteAccountResponse.deserializeBinary
)


/**
 * @param {!proto.account_service.DeleteAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.account_service.DeleteAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.account_service.DeleteAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.account_service.AccountClient.prototype.deleteAccount =
    function(request, metadata, callback) {
      return this.client_.rpcCall(this.hostname_ +
      '/account_service.Account/DeleteAccount',
      request,
      metadata || {},
      methodInfo_Account_DeleteAccount,
      callback)
    }


/**
 * @param {!proto.account_service.DeleteAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.account_service.DeleteAccountResponse>}
 *     A native promise that resolves to the response
 */
proto.account_service.AccountPromiseClient.prototype.deleteAccount =
    function(request, metadata) {
      return this.client_.unaryCall(this.hostname_ +
      '/account_service.Account/DeleteAccount',
      request,
      metadata || {},
      methodInfo_Account_DeleteAccount)
    }


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.account_service.GetAccountRequest,
 *   !proto.account_service.GetAccountResponse>}
 */
const methodInfo_Account_GetAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.account_service.GetAccountResponse,
  /** @param {!proto.account_service.GetAccountRequest} request */
  function(request) {
    return request.serializeBinary()
  },
  proto.account_service.GetAccountResponse.deserializeBinary
)


/**
 * @param {!proto.account_service.GetAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.account_service.GetAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.account_service.GetAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.account_service.AccountClient.prototype.getAccount =
    function(request, metadata, callback) {
      return this.client_.rpcCall(this.hostname_ +
      '/account_service.Account/GetAccount',
      request,
      metadata || {},
      methodInfo_Account_GetAccount,
      callback)
    }


/**
 * @param {!proto.account_service.GetAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.account_service.GetAccountResponse>}
 *     A native promise that resolves to the response
 */
proto.account_service.AccountPromiseClient.prototype.getAccount =
    function(request, metadata) {
      return this.client_.unaryCall(this.hostname_ +
      '/account_service.Account/GetAccount',
      request,
      metadata || {},
      methodInfo_Account_GetAccount)
    }


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.account_service.LoginRequest,
 *   !proto.account_service.LoginResponse>}
 */
const methodInfo_Account_Login = new grpc.web.AbstractClientBase.MethodInfo(
  proto.account_service.LoginResponse,
  /** @param {!proto.account_service.LoginRequest} request */
  function(request) {
    return request.serializeBinary()
  },
  proto.account_service.LoginResponse.deserializeBinary
)


/**
 * @param {!proto.account_service.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.account_service.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.account_service.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.account_service.AccountClient.prototype.login =
    function(request, metadata, callback) {
      return this.client_.rpcCall(this.hostname_ +
      '/account_service.Account/Login',
      request,
      metadata || {},
      methodInfo_Account_Login,
      callback)
    }


/**
 * @param {!proto.account_service.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.account_service.LoginResponse>}
 *     A native promise that resolves to the response
 */
proto.account_service.AccountPromiseClient.prototype.login =
    function(request, metadata) {
      return this.client_.unaryCall(this.hostname_ +
      '/account_service.Account/Login',
      request,
      metadata || {},
      methodInfo_Account_Login)
    }


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.account_service.LogoutRequest,
 *   !proto.account_service.LogoutResponse>}
 */
const methodInfo_Account_Logout = new grpc.web.AbstractClientBase.MethodInfo(
  proto.account_service.LogoutResponse,
  /** @param {!proto.account_service.LogoutRequest} request */
  function(request) {
    return request.serializeBinary()
  },
  proto.account_service.LogoutResponse.deserializeBinary
)


/**
 * @param {!proto.account_service.LogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.account_service.LogoutResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.account_service.LogoutResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.account_service.AccountClient.prototype.logout =
    function(request, metadata, callback) {
      return this.client_.rpcCall(this.hostname_ +
      '/account_service.Account/Logout',
      request,
      metadata || {},
      methodInfo_Account_Logout,
      callback)
    }


/**
 * @param {!proto.account_service.LogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.account_service.LogoutResponse>}
 *     A native promise that resolves to the response
 */
proto.account_service.AccountPromiseClient.prototype.logout =
    function(request, metadata) {
      return this.client_.unaryCall(this.hostname_ +
      '/account_service.Account/Logout',
      request,
      metadata || {},
      methodInfo_Account_Logout)
    }


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.account_service.ResetPasswordRequest,
 *   !proto.account_service.ResetPasswordResponse>}
 */
const methodInfo_Account_ResetPassword = new grpc.web.AbstractClientBase.MethodInfo(
  proto.account_service.ResetPasswordResponse,
  /** @param {!proto.account_service.ResetPasswordRequest} request */
  function(request) {
    return request.serializeBinary()
  },
  proto.account_service.ResetPasswordResponse.deserializeBinary
)


/**
 * @param {!proto.account_service.ResetPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.account_service.ResetPasswordResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.account_service.ResetPasswordResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.account_service.AccountClient.prototype.resetPassword =
    function(request, metadata, callback) {
      return this.client_.rpcCall(this.hostname_ +
      '/account_service.Account/ResetPassword',
      request,
      metadata || {},
      methodInfo_Account_ResetPassword,
      callback)
    }


/**
 * @param {!proto.account_service.ResetPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.account_service.ResetPasswordResponse>}
 *     A native promise that resolves to the response
 */
proto.account_service.AccountPromiseClient.prototype.resetPassword =
    function(request, metadata) {
      return this.client_.unaryCall(this.hostname_ +
      '/account_service.Account/ResetPassword',
      request,
      metadata || {},
      methodInfo_Account_ResetPassword)
    }


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.account_service.LockAccountRequest,
 *   !proto.account_service.LockAccountResponse>}
 */
const methodInfo_Account_LockAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.account_service.LockAccountResponse,
  /** @param {!proto.account_service.LockAccountRequest} request */
  function(request) {
    return request.serializeBinary()
  },
  proto.account_service.LockAccountResponse.deserializeBinary
)


/**
 * @param {!proto.account_service.LockAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.account_service.LockAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.account_service.LockAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.account_service.AccountClient.prototype.lockAccount =
    function(request, metadata, callback) {
      return this.client_.rpcCall(this.hostname_ +
      '/account_service.Account/LockAccount',
      request,
      metadata || {},
      methodInfo_Account_LockAccount,
      callback)
    }


/**
 * @param {!proto.account_service.LockAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.account_service.LockAccountResponse>}
 *     A native promise that resolves to the response
 */
proto.account_service.AccountPromiseClient.prototype.lockAccount =
    function(request, metadata) {
      return this.client_.unaryCall(this.hostname_ +
      '/account_service.Account/LockAccount',
      request,
      metadata || {},
      methodInfo_Account_LockAccount)
    }


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.account_service.RequestUnlockAccountRequest,
 *   !proto.account_service.RequestUnlockAccountResponse>}
 */
const methodInfo_Account_RequestUnlockAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.account_service.RequestUnlockAccountResponse,
  /** @param {!proto.account_service.RequestUnlockAccountRequest} request */
  function(request) {
    return request.serializeBinary()
  },
  proto.account_service.RequestUnlockAccountResponse.deserializeBinary
)


/**
 * @param {!proto.account_service.RequestUnlockAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.account_service.RequestUnlockAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.account_service.RequestUnlockAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.account_service.AccountClient.prototype.requestUnlockAccount =
    function(request, metadata, callback) {
      return this.client_.rpcCall(this.hostname_ +
      '/account_service.Account/RequestUnlockAccount',
      request,
      metadata || {},
      methodInfo_Account_RequestUnlockAccount,
      callback)
    }


/**
 * @param {!proto.account_service.RequestUnlockAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.account_service.RequestUnlockAccountResponse>}
 *     A native promise that resolves to the response
 */
proto.account_service.AccountPromiseClient.prototype.requestUnlockAccount =
    function(request, metadata) {
      return this.client_.unaryCall(this.hostname_ +
      '/account_service.Account/RequestUnlockAccount',
      request,
      metadata || {},
      methodInfo_Account_RequestUnlockAccount)
    }


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.account_service.UnlockAccountRequest,
 *   !proto.account_service.UnlockAccountResponse>}
 */
const methodInfo_Account_UnlockAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.account_service.UnlockAccountResponse,
  /** @param {!proto.account_service.UnlockAccountRequest} request */
  function(request) {
    return request.serializeBinary()
  },
  proto.account_service.UnlockAccountResponse.deserializeBinary
)


/**
 * @param {!proto.account_service.UnlockAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.account_service.UnlockAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.account_service.UnlockAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.account_service.AccountClient.prototype.unlockAccount =
    function(request, metadata, callback) {
      return this.client_.rpcCall(this.hostname_ +
      '/account_service.Account/UnlockAccount',
      request,
      metadata || {},
      methodInfo_Account_UnlockAccount,
      callback)
    }


/**
 * @param {!proto.account_service.UnlockAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.account_service.UnlockAccountResponse>}
 *     A native promise that resolves to the response
 */
proto.account_service.AccountPromiseClient.prototype.unlockAccount =
    function(request, metadata) {
      return this.client_.unaryCall(this.hostname_ +
      '/account_service.Account/UnlockAccount',
      request,
      metadata || {},
      methodInfo_Account_UnlockAccount)
    }


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.account_service.ListUsersRequest,
 *   !proto.account_service.ListUsersResponse>}
 */
const methodInfo_Account_ListUsers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.account_service.ListUsersResponse,
  /** @param {!proto.account_service.ListUsersRequest} request */
  function(request) {
    return request.serializeBinary()
  },
  proto.account_service.ListUsersResponse.deserializeBinary
)


/**
 * @param {!proto.account_service.ListUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.account_service.ListUsersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.account_service.ListUsersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.account_service.AccountClient.prototype.listUsers =
    function(request, metadata, callback) {
      return this.client_.rpcCall(this.hostname_ +
      '/account_service.Account/ListUsers',
      request,
      metadata || {},
      methodInfo_Account_ListUsers,
      callback)
    }


/**
 * @param {!proto.account_service.ListUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.account_service.ListUsersResponse>}
 *     A native promise that resolves to the response
 */
proto.account_service.AccountPromiseClient.prototype.listUsers =
    function(request, metadata) {
      return this.client_.unaryCall(this.hostname_ +
      '/account_service.Account/ListUsers',
      request,
      metadata || {},
      methodInfo_Account_ListUsers)
    }


module.exports = proto.account_service

