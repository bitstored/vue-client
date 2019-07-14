
<template>
  <div>
    <div >
      <h3 style="color: green">Create file</h3></div>
    <form
      enctype="multipart/form-data"
      @submit.prevent="handleSubmit"
    >
      <div
        class="form-group"
      >
        <label htmlFor="name">File Name</label>
        <input
          id="file_name"
          v-model="file.name"
          type="text"
          name="name"
          class="form-control"
        >
      </div>
       <div
        class="form-group"
      >
        <label for="type">File Type</label>
        <b-form-select
          v-validate="'required'"
          v-model="file.type"
          value="txt"
          :options="file_types"
          name="type"
          class="form-control"
        >
        </b-form-select>
      </div>

      <div
        class="form-group"
      >
        <label for="content">Content</label>
        <ckeditor
          :editor="editor"
          v-model="file.data"
          name="content"
          type="text"
          class="ck-editor"
          :config="editorConfig"
         >
        </ckeditor>
      </div>
      <div
        class="form-group"
      >
        <label for="secret">Secret Phrase</label>
        <input
          v-validate="'required'"
          v-model="file.secret"
          type="password"
          name="secret"
          class="form-control"
        >
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
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
  name: 'CreateFile',
  data() {
    return {
      file_types: [
        {value: 'txt', text: 'Text file'},
        {value: '', text: 'Other'},
      ],
      editor: ClassicEditor,
      editorConfig: {
        toolbar: [ 'bold', 'italic', '|', 'link' ]
      },
      file: {
        data: '',
        name: '',
        secret: '',
        type: '',
        is_writable: false,
        is_private: false,
      },
      uploading: false
    }
  },
  computed: {
    ...mapState('account', ['status'])
  },
  methods: {
    ...mapActions('files', ['createFile']),
    handleSubmit () {
      this.submitted = true
      this.$validator.validate().then(valid => {
        this.createFile(this.file)
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
