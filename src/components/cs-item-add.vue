<template lang="pug">
  cs-assign(
    bucketType="item"
    :optionFinder="getSelectOptions"
    :getter="getById"
  )
</template>

<script>
import csAssign from 'components/cs-assign'
import { mapGetters } from 'vuex'
export default {
  name: 'cs-item-add',
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
    ...mapGetters('item', [
      'getById',
      'getSelectOptions'
    ]),
    getOptions () {
      return [{'label': 'test', 'value': 1}]
    }
    // getOptions: {
    //   get () {
    //     return [{'label': 'test', 'value': 1}]
    //   }
    // }
  },
  method: {
    getOptions () {
      return [{'label': 'test', 'value': 1}]
    }
  }
}
</script>

<style lang="stylus">

</style>
