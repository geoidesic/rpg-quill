<template lang="pug">
  cs-assign(
    bucketType="weapon"
    :optionFinder="getSelectOptions"
    :getter="getById"
  )
</template>

<script>
import csAssign from 'components/cs-assign'
import { mapGetters } from 'vuex'
export default {
  name: 'cs-weapon-add',
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
    ...mapGetters('weapon', [
      'getById',
      'getSelectOptions'
    ])
  }
}
</script>

<style lang="stylus">

</style>
