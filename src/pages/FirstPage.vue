<template>
  <div class="Main">
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  _name: 'FirstPage',
  get name() {
    return this._name
  },
  set name(value) {
    this._name = value
  },
  data() {
    return {
      name: 'diana'
    }
  }
}
</script>
