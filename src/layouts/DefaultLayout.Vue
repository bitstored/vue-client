<template>
  <div class="app-container">
    <div class="DefaultLayout">
      <div class="page-header">
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
  margin-left: 10%;
  width: 100%;
  margin-top: 0px;
}
.page-side-bar{
  width: 10%;
}
.page-header{
  width: 100%;
  height: 8%;
  margin-left: 0%;
  position: relative;
  align-items: flex-start;
}

@media (min-width: 2880px) {
  .app-container{
    max-width:  2880px;
  }
  .container{
    max-width:  2880px;
      margin-left: 10%;

  }
  .page-header{
    max-width:  2880px;
  }
}
@media (max-width: 800px) {
  .page-side-bar{
  width: 100px;
}
}
</style>
