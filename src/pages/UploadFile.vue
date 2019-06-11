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
          id="uploaded_dile"
          type="file"
          name="file"
          class="form-control"
        >
      </div>
      <div
        class="form-group"
      >
        <label for="Email">Secret Phrase</label>
        <input
          v-validate="'required'"
          v-model="file.secret"
          type="text"
          name="secret"
          class="form-control"
        >
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
import { mapState } from 'vuex'

export default {
  name: 'UploadFile',
  data() {
    return {
      file: {
        data: '',
        name: '',
        secret: '',
        type: '',
      },
      uploading: false
    }
  },
  computed: {
    ...mapState('account', ['status'])
  },
}
</script>
