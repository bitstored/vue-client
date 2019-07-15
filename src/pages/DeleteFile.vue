<template>
  <div class="container ">
    <div>Are you sure you want to delete this file?</div>
    <div>
      <button
        class="btn-danger"
        @click="_deleteFile"
      >
        Delete
      </button> &nbsp;
      <router-link to="/drive">Go to my drive</router-link>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'DeleteFile',
  computed: {
    ...mapState('files', ['status'])
  },
  methods: {
    ...mapActions('files', ['deleteFile']),
    _deleteFile() {
      // eslint-disable-next-line no-console
      console.log('Deleting file....')
      this.deleteFile(this.$route.params.id)
    }
  },
}
</script>
