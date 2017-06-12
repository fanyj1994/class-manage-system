<template>
  <div class="layout">
    <top-bar></top-bar>
    <div class="layout-content">
      <Row>
        <i-col span="4">
          <left-menu></left-menu>
        </i-col>
        <i-col span="20" width="auto">
          <router-view></router-view>
        </i-col>
      </Row>
    </div>
  </div>
</template>
<script>
import leftMenu from '../components/leftMenu'
import topBar from '../components/topBar'
export default {
  components: {
    topBar,
    leftMenu
  }
}
</script>
<style scoped>

</style>
