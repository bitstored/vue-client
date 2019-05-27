<template>
  <div id="register-form">
    <h2>Register</h2>
    <form
      enctype="multipart/form-data"
      @submit.prevent="handleSubmit"
    >
      <div
        class="form-group"
      >
        <label for="firstName">First Name</label>
        <input
          v-validate="'required'"
          v-model="user.firstName"
          :class="{ 'is-invalid': submitted && errors.has('firstName') }"
          type="text"
          name="firstName"
          class="form-control"
        >
        <div
          v-if="submitted && errors.has('firstName')"
          class="invalid-feedback"
        >
          {{ errors.first('firstName') }}
        </div>
      </div>
      <div
        class="form-group"
      >
        <label for="lastName">Last Name</label>
        <input
          v-validate="'required'"
          v-model="user.lastName"
          :class="{ 'is-invalid': submitted && errors.has('lastName') }"
          type="text"
          name="lastName"
          class="form-control"
        >
        <div
          v-if="submitted && errors.has('lastName')"
          class="invalid-feedback"
        >
          {{ errors.first('lastName') }}
        </div>
      </div>
      <div
        class="form-group"
      >
        <label htmlFor="photo">Photo</label>
        <input
          type="file"
          name="photo"
          class="form-control"
        >
      </div>
      <div
        class="form-group"
      >
        <label for="Email">Email</label>
        <input
          v-validate="'required'"
          v-model="user.email"
          :class="{ 'is-invalid': submitted && errors.has('email') }"
          type="text"
          name="email"
          class="form-control"
        >
        <div
          v-if="submitted && errors.has('email')"
          class="invalid-feedback"
        >
          {{ errors.first('email') }}
        </div>
      </div>
      <div
        class="form-group"
      >
        <label for="username">Username</label>
        <input
          v-validate="'required'"
          v-model="user.username"
          :class="{ 'is-invalid': submitted && errors.has('username') }"
          type="text"
          name="username"
          class="form-control"
        >
        <div
          v-if="submitted && errors.has('username')"
          class="invalid-feedback"
        >
          {{ errors.first('username') }}
        </div>
      </div>
      <div
        class="form-group"
      >
        <label htmlFor="password">Password</label>
        <input
          v-validate="{ required: true, min: 8 }"
          :class="{ 'is-invalid': submitted && errors.has('password') }"
          v-model="user.password"
          type="password"
          name="password"
          class="form-control"
        >
        <div
          v-if="submitted && errors.has('password')"
          class="invalid-feedback"
        >
          {{ errors.first('password') }}
        </div>
      </div>
      <!-- <div
        class="form-group"
      >
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          v-validate="'required|confirmed:password'"
          :class="{ 'is-invalid': submitted && errors.has('confirmPassword') }"
          type="password"
          name="confirmPassword"
          class="form-control"
        >
        <div
          v-if="submitted && errors.has('confirmPassword')"
          class="invalid-feedback"
        >
          {{ errors.first('confirmPassword') }}
        </div>
      </div> -->
      <div
        class="form-group"
      >
        <label htmlFor="phoneNumber">Phone number</label>
        <input
          v-validate="{ required: true}"
          v-model="user.phoneNumber"
          :class="{ 'is-invalid': submitted && errors.has('phoneNumber') }"
          type="number"
          name="phoneNumber"
          class="form-control"
        >
        <div
          v-if="submitted && errors.has('phoneNumber')"
          class="invalid-feedback"
        >
          {{ errors.first('confirmPassword') }}
        </div>
      </div>

      <div
        class="form-group"
      >
        <button
          :disabled="status.registering"
          class="btn btn-primary"
        >
          Register
        </button>
        <img
          v-show="status.registering"
          src="data:image/gifbase64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
        >
        <router-link
          to="/login"
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
  data () {
    return {
      user: {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        photo: '',
        email: '',
        birthday: '',
      },
      submitted: false
    }
  },
  computed: {
    ...mapState('account', ['status'])
  },
  methods: {
    ...mapActions('account', ['register']),
    handleSubmit () {
      this.submitted = true
      this.$validator.validate().then(valid => {
        if (valid) {
          this.register(this.user)
        }
      })
    }
  }
}
</script>

<style scoped>
.register-form form{
  position: flex;
  top: 0;
  left: 0;
  align-items: stretch;
  height: 100%;
  width: 100%;
}
</style>

