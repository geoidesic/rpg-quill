<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
.clearfix {
  display: flow-root
  position: relative
}
.left {
  position: relative
  float: left
}
.right {
  position: relative
  float: right
}
</style>
