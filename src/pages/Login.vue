<template>
  <div class="Main">
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          id="username"
          v-model="username"
          :class="{ 'is-invalid': submitted && !username }"
          type="text"
          name="username"
          class="form-control"
        >
        <div
          v-show="submitted && !username"
          class="invalid-feedback"
        >
          Username is required
        </div>
      </div>
      <div class="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          v-model="password"
          :class="{ 'is-invalid': submitted && !password }"
          type="password"
          name="password"
          class="form-control"
        >
        <div
          v-show="submitted && !password"
          class="invalid-feedback"
        >
          Password is required
        </div>
        <div
          v-show="submitted && error"
          id="login_failed_error"
          class="invalid-feedback"
        >
          Can't find an user with providen data.
        </div>
      </div>
      <div class="form-group">
        <button
          :disabled="status.loggingIn"
          class="btn btn-primary"
        >
          Login
        </button>
        <img
          v-show="status.loggingIn"
          src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
        >
      </div>
      <div>
        <router-link
          to="/register"
          class="btn btn-link"
        >
          Don't have an account? Register!
        </router-link>
        <router-link
          to="/reset"
          class="btn btn-link"
        >
          Forgot password? Reset!
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions} from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      error: '',
      submitted: false
    }
  },
  computed: {
    ...mapState('account', ['status'])
  },
  created () {
    // reset login status
    //this.logout()
  },
  methods: {
    ...mapActions('account', ['login', 'logout']),
    handleSubmit() {
      this.submitted = true
      const { username, password } = this

      if (username && password) {
        this.login({ username, password })
      }
    }
  }
}
</script>
