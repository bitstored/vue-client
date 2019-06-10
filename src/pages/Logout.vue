<template>
  <div>
    Logging out...
  </div>
</template>

<script>
import { mapState, mapActions} from 'vuex'

export default {
  name: 'Logout',
  computed: {
    ...mapState('account', ['status'])
  },
  created() {
    this.end_session()
  },
  methods: {
    ...mapActions('account', [ 'logout']),
    end_session() {
      this.logout()
    }
  },
}
</script>

