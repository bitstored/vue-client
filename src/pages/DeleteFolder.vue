<template>
  <div class="container ">
    <div>Are you sure you want to delete this folder?</div>
    <div>
      <button
        class="btn-danger"

        @click="_deleteFolder"
      >
        Delete
      </button> &nbsp;
      <router-link to="/drive">Go to drive</router-link>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'DeleteFolder',
  computed: {
    ...mapState('files', ['status'])
  },
  methods: {
    ...mapActions('files', ['deleteFolder']),
    _deleteFolder() {
      // eslint-disable-next-line no-console
      console.log('Deleting folder....')
      this.deleteFolder(this.$route.params.id)
    }
  },
}
</script>
