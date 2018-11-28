<template lang="pug">
  cs-assign(
    bucketType="attribute"
    :optionFinder="getSelectOptions"
    :getter="getById"
  )
</template>

<script>
import csAssign from 'components/cs-assign'
import { mapGetters } from 'vuex'
export default {
  name: 'cs-attribute-add',
  data () {
    return {
      editing: false
    }
  },
  props: ['bucketType'],
  components: {
    csAssign
  },
  mounted () {
  },
  computed: {
    ...mapGetters('attribute', [
      'getById',
      'getSelectOptions'
    ])
  }
}
</script>

<style lang="stylus">

</style>
