<template>
  <div class="app-container">
    <div class="DefaultLayout">
      <div class="page-header table">
        <bits-header/>
      </div>
      <div >
        <div class="page-side-bar">
          <bits-side-bar/>
        </div>
        <div class="page-content">
          <main class="DefaultLayoutMain">
            <slot/>
          </main>
        </div>
      </div>
      <div class="">
        <bits-footer/>
      </div>
    </div>
  </div>
</template>

<script>
import BitsHeader from '../components/BitsHeader'
import BitsFooter from '../components/BitsFooter'
import BitsSideBar from '../components/BitsSideBar'

export default {
  name: 'DefaultLayout',
  components: {
    BitsHeader,
    BitsFooter,
    BitsSideBar
  }
}
</script>

<style>
.page-content{
  margin-top: 65px;
  margin-left: 10%;
  width: 100%;
}
.page-side-bar{
  margin-top: 65px;
  width: 10%;
}
.page-header{
  width: 100%;
  height: 8%;
  position: relative;
  display: inline;
  align-items: flex-start;
}

@media (min-width: 1500px) {
  .container{
    max-width:  1500px;
  }
  .page-header{
    width:  1500px;
  }
}

</style>
