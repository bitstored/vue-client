<template>
  <div>
    Edit file
  </div>
</template>
<script>
export default {
  name: 'EditFile',
  created() {
  console.log('identifier', this.$route.params.id);
},

}
</script>
