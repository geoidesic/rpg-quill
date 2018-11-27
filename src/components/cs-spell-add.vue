<template lang="pug">
  cs-assign(
    bucketType="spell"
    :optionFinder="getSelectOptions"
    :getter="getById"
  )
</template>

<script>
import csAssign from 'components/cs-assign'
import { mapGetters } from 'vuex'
export default {
  name: 'cs-spell-add',
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
    ...mapGetters('spell', [
      'getById',
      'getSelectOptions'
    ])
  },
  methods: {
  }
}
</script>

<style lang="stylus">

</style>
