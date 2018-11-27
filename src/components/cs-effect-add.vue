<template lang="pug">
  cs-assign(
    bucketType="effect"
    :optionFinder="getSelectOptions"
    :getter="getById"
  )
</template>

<script>
import csAssign from 'components/cs-assign'
import { mapGetters } from 'vuex'
export default {
  name: 'cs-effect-add',
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
    ...mapGetters('effect', [
      'getById',
      'getSelectOptions'
    ])
  }
}
</script>

<style lang="stylus">

</style>
