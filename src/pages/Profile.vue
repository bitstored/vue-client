<template>
  <div>

  </div>
</template>
<script>
export default {
  name: 'Profile',
  data () {
    return {
      username: '',
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      photo: '',
      last_login: '',
      birthday: '',
      submitted: false
    }
  },
  computed: {
    ...mapState('account', ['status'])
  },
  methods: {
    ...mapActions('account', ['get_account']),
    handleSubmit() {
      this.submitted = true
      const { username, password } = this

      if (username && password) {
        this.get_account()
      }
    }
  }
}
</script>
