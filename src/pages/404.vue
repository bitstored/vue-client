<template>
  <div>
    <h3>Page not found.</h3>
  </div>
</template>

<script>

// import {AccountClient, LoginRequest} from '../pb/user-service_pb.js'
// var client = new AccountClient('https:://localhost:5008', null, null)
// var request = new LoginRequest('diana', 'mere')

// var status = client.Login(request, {},
//   function (err, response) {
//     console.log('testme response: ' + response)
//     console.log('testme error: ' + err)
//   })

export default {
  name: 'NotFound404',
  data () {
    return {
      // Status: status
    }
  }
}
</script>
