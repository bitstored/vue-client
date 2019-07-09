<template>
  <div>
    <div>Upload file</div>
    <form
      enctype="multipart/form-data"
      @submit.prevent="handleSubmit"
    >
      <div
        class="form-group"
      >
        <label htmlFor="file">File</label>
        <input
          v-validate="'required'"
          id="uploaded_file"
          type="file"
          name="file"
          class="form-control"
        >
        <div
          v-show="submitted && !file.data"
          class="invalid-feedback"
        >
          File is required
        </div>
      </div>
      <div
        class="form-group"
      >
        <label for="secret">Secret Phrase</label>
        <input
          v-validate="'required'"
          v-model="file.secret"
          type="text"
          name="secret"
          class="form-control"
        >
        <div
          v-show="submitted && !file.secret"
          class="invalid-feedback"
        >
          Secret phrase is required
        </div>
      </div>
      <div
        class="form-group"
      >
        <input
          v-model="file.is_private"
          type="checkbox"
          name="is_secret"
        >
        <label for="is_writable">Is Secret</label>
      </div>
      <div
        class="form-group"
      >
        <input
          v-model="file.is_writable"
          type="checkbox"
          name="is_writable"
        >
        <label for="is_writable">Is Editable</label>
      </div>
      <div
        class="form-group"
      >
        <button
          :disabled="status.uploading"
          class="btn btn-primary"
        >
          Upload
        </button>
        <img
          v-show="status.uploading"
          src="data:image/gifbase64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
        >
        <router-link
          to="/drive"
          class="btn btn-link"
        >
          Cancel
        </router-link>
      </div>

    </form>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'UploadFile',
  data() {
    return {
      file: {
        data: '',
        name: '',
        secret: '',
        type: '',
        is_writable: false,
        is_private: false,
      },
      uploading: false,
      error: '',
      submitted: false
    }
  },
  computed: {
    ...mapState('files', ['status'])
  },
  methods: {
    ...mapActions('files', ['upload']),
    handleSubmit () {
      this.submitted = true
      this.$validator.validate().then(valid => {
        if (valid) {
          this.file.name = document.getElementById('uploaded_file').files[0].name
          this.file.type = document.getElementById('uploaded_file').files[0].name.split('.').pop()

          const reader = new FileReader()
          reader.onload = () => {
            this.upload({...this.file, data: reader.result})
          }
          reader.readAsText(document.getElementById('uploaded_file').files[0])

        }
      })
    }
  }
}
</script>
