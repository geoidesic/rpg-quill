<template lang="pug">
  cs-bucket(
    bucketType="weapon"
    bucketName="Weapons"
  )
</template>

<script>
// @TODO: this should become a generic list component, which can be re-used by each section using slots and props
import csBucket from 'components/cs-bucket'
export default {
  name: 'cs-weapons',
  components: {
    csBucket
  }
}
</script>

<style lang="stylus">

.list {
  padding: 10px 0 0 0
}
</style>
