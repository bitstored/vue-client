<template>
  <div>
    <h3>
      Edit file {{this.identifier}}
    </h3>
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
    <div>
      <form v-on:submit.prevent="_getContent">
        <button
          class="btn-success"
        >
          Get Content
        </button> &nbsp;
      </form>
      <router-link v-if="!content" to="/drive">
        Go to drive
      </router-link>
    </div>
    <p></p>

    <div v-if="content">
      <label for="content">Content</label>
        <ckeditor
          :editor="editor"
          v-model="content"
          name="content"
          type="text"
          class="ck-editor"
          :config="editorConfig"
         >
        </ckeditor>
      <div>
        <p></p>
        <form v-on:submit.prevent="_updateContent">
        <button
          class="btn-success"
        >
          Update Content
        </button> &nbsp;
        </form>

        <p></p>

        <label for="name">
          Name
        </label>
        <input
          v-model="name"
          name="name"
          type="text"
        >
        <p></p>
        <div>
          <form v-on:submit.prevent="_rename">
            <button
              class="btn-success"
            >
              Rename File
            </button> &nbsp;
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { mapState, mapActions} from 'vuex'

export default {
  name: 'EditFile',
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        toolbar: [ 'bold', 'italic', '|', 'link' ]
      },
      identifier : this.$route.params.id,
      content: '',
      password: '',
      name: '',
    }
  },
  computed: {
    ...mapState('files', ['status'])
  },
  methods: {
    ...mapActions('files', ['downloadFile', 'rename', 'updateContent']),
    _getContent()  {
      var fileID = this.$route.params.id
      var userID = localStorage.getItem('user_id')
      this.downloadFile({fileID: fileID, userID: userID, password: this.password, watermarkingMessage: '', steganoMessage: ''})
      .then(
        rsp => {
          var file = rsp.toObject().file
          this.content = file.content
          this.name = file.name
        }
      )
      .catch(
        err => {
          alert('Invalid password')
          }

      )    },
    _rename() {
      this.rename({identifier: this.$route.params.id, name: this.name})
    },
    _updateContent() {
      this.updateContent({identifier: this.$route.params.id, content: this.content, password: this.password})

    }
  },
  created() {
  console.log('identifier', this.$route.params.id);
},

}
</script>
