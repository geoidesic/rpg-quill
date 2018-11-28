<template lang="pug">
  cs-bucket(
    bucketType="item"
    bucketName="Inventory"
  )
</template>

<script>
// @TODO: this should become a generic list component, which can be re-used by each section using slots and props
import csBucket from 'components/cs-bucket'
export default {
  name: 'cs-items',
  components: {
    csBucket
  }
}
</script>

<style lang="stylus">
.items {
}
.list {
  padding: 10px 0 0 0
}
</style>
