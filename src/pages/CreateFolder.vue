
<template>
  <div>
    <div >
      <h3 style="color: green">Create folder</h3></div>
    <form
      enctype="multipart/form-data"
      @submit.prevent="handleSubmit"
    >
      <div
        class="form-group"
      >
        <label htmlFor="name">Folder Name</label>
        <input
          id="file_name"
          type="text"
          name="name"
          v-model="folder.name"
          v-validate="'required'"
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
          Create
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
  name: 'CreateFolder',
  data() {
    return {
      folder: {
        name: '',
        parent: '',
      },
      uploading: false
    }
  },
  computed: {
    ...mapState('files', ['status'])
  },
  methods: {
    ...mapActions('files', ['createFolder']),
    handleSubmit () {
      this.submitted = true
      this.$validator.validate().then(valid => {
        if (valid) {
          this.folder.parent = localStorage.getItem('last_folder')
          console.log(localStorage.getItem('last_folder'))
          this.createFolder({name: this.folder.name, parent: this.folder.parent}).then(
            console.log('ok')
          )
        }
      })
    }
  }
}
</script>
<style>
.ck-editor .ck-content{
  height: 400px;
  text-align: left;

}

</style>
