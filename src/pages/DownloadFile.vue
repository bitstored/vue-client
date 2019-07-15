<template>
   <div class="container ">
    <h3>Are you are attempting to download the file <mark style="background-color: white;color:green">{{fileName}}</mark>, are you sure?</h3>
    <div
        class="form-group"
      >
        <label htmlFor="password">Password</label>
        <input
          v-validate="{ required: true}"
          v-model="password"
          :class="{ 'is-invalid':  errors.has('password') }"
          type="password"
          name="password"
          class="form-control"
        >
        <div
          v-if=" errors.has('password')"
          class="invalid-feedback"
        >
          {{ errors.first('password') }}
        </div>
    </div>
    <div
        class="form-group"
      >
        <label htmlFor="steganoMessage">Stegano Message</label>
        <input
          v-model="steganoMessage"
          :class="{ 'is-invalid':  errors.has('steganoMessage') }"
          type="text"
          name="steganoMessage"
          class="form-control"
        >
        <div
          v-if=" errors.has('steganoMessage')"
          class="invalid-feedback"
        >
          {{ errors.first('steganoMessage') }}
        </div>
    </div>
    <div
        class="form-group"
      >
        <label htmlFor="watermarkingMessage">Watermarking Message</label>
        <input
          v-model="watermarkingMessage"
          :class="{ 'is-invalid':  errors.has('watermarkingMessage') }"
          type="text"
          name="watermarkingMessage"
          class="form-control"
        >
        <div
          v-if=" errors.has('watermarkingMessage')"
          class="invalid-feedback"
        >
          {{ errors.first('watermarkingMessage') }}
        </div>
    </div>
    <div>
      <button
        class="btn-success"
        v-on:click="_downloadFile"
      >
        Download
      </button> &nbsp;
      <router-link to="/drive">Go to drive</router-link>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions} from 'vuex'
import { saveAs } from 'file-saver';

export default {

  data() {
    return {
      name: 'Download File',
      fileName: '',
      fileID: '',
      password: '',
      userID: '',
      watermarkingMessage: '',
      steganoMessage: '',
    }
  },
  created() {
    this.fileID = this.$route.params.id
    this.fileName = this.fileID
    this.userID = localStorage.getItem('user_id')
  },
  computed: {
    ...mapState('files', ['status'])
  },
  methods: {
    ...mapActions('files', ['downloadFile']),
    _downloadFile() {
      this.fileID = this.$route.params.id
      this.fileName = this.fileID
      this.userID = localStorage.getItem('user_id')
      this.downloadFile({fileID: this.fileID, userID: this.userID, password: this.password, watermarkingMessage: this.watermarkingMessage, steganoMessage: this.steganoMessage})
      .then(
        rsp => {
          var file = rsp.toObject().file
          var FileSaver = require('file-saver');
          if (file.fileType == 5) {
            var blob = new Blob([btoa(unescape(decodeURIComponent(file.content)))], {type: "image/png"});
                                     localStorage.setItem('b', file.content)

          }
          else  {
            var blob = new Blob([file.content] , {type: "text/base64;charset=utf-8"});
          }
          FileSaver.saveAs(blob, file.name);

        }
      )
      .catch(
        err => {
          status = {
            error : err.message
          }
        }
      )


    },
  },
}
</script>
