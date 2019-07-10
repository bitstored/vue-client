<template>
  <div class="container ">
    <div>Are you sure you want to delete profile?</div>
    <div>
      <button
        class="btn-danger"
        v-on:click="deleteAccount"
      >
        Delete
      </button> &nbsp;
      <router-link to="/profile">Go to profile</router-link>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'DeleteProfile',
  computed: {
    ...mapState('users', ['status'])
  },
  methods: {
    ...mapActions('users', ['_delete']),
    deleteAccount() {
      // eslint-disable-next-line no-console
      console.log('Deleting....')
      this._delete()
    }
  },
}
</script>

<style>
</style>
