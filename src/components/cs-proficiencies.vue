<template lang="pug">
  cs-bucket(
    bucketType="proficiency"
    bucketName="Proficiencies"
  )
</template>

<script>
// @TODO: this should become a generic list component, which can be re-used by each section using slots and props
import csBucket from 'components/cs-bucket'
export default {
  name: 'cs-proficiencies',
  components: {
    csBucket
  }
}
</script>

<style lang="stylus">
.weapons {
  min-width: 250px
}
.list {
  padding: 10px 0 0 0
}
</style>
