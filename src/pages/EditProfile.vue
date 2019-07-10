<template>
  <div id="edit-profile-form">
    <h2>Edit profile</h2>
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
          id="profile_photo"
          type="file"
          name="photo"
          class="form-control"
          accept="image/*"
          multiple="false"
        >
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


      <div
        class="form-group"
      >
        <button
          :disabled="status.registering"
          class="btn btn-primary"
        >
          Save
        </button>
        <img
          v-show="status.registering"
          src="data:image/gifbase64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
        >
      </div>
    </form>
  </div>
</template>
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vuejs-datepicker"></script>
<script>
import { mapState, mapActions } from 'vuex'


export default {
  data () {
    return {
      user: {
        firstName: '',
        lastName: '',
        password: '',
        photo: '',
      },
      submitted: false
    }
  },

  computed: {
    ...mapState('account', ['status'])
  },
  methods: {
    ...mapActions('account', ['update']),
    handleSubmit () {
      this.submitted = true
      this.$validator.validate().then(valid => {
        if (valid) {
          const reader = new FileReader()
          reader.onload = () => {
            this.update({...this.user, 'photo': reader.result})
          }
          reader.readAsDataURL(document.getElementById('profile_photo').files[0])
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
#birthday-picker{
  color: darkgray;
}

</style>

