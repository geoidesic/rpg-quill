<template lang="pug">
  cs-assign(
    :item="item"
    bucketType="bucketType"
    storeModule="weapons"
    :options="getSelectOptions()"
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
  props: ['item'],
  components: {
    csAssign
  },
  mounted () {
  },
  computed: {
    ...mapGetters('weapons', [
      'getById',
      'getSelectOptions'
    ])
  }
}
</script>

<style lang="stylus">

</style>
