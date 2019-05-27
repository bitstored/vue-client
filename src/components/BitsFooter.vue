<template>
  <vue-ads-bar
    id="footer"
    slot="footer"
  >
    <div>
      <h1>footer</h1>
    </div>
  </vue-ads-bar>
</template>
  <!-- :footer="true" -->

<script>
import { VueAdsBar } from 'vue-ads-layout'
export default {
  name: 'BitsFooter',
  components: {
    VueAdsBar
  }
}
</script>

// :footer="true"
<style>
#footer {
  left: 0;
  padding: 0 0 10px 0;
  margin: 0;
  position: absolute;
  width: 100%;
  background-color: #eeeeee;
}
</style>
