<template lang="pug">
  cs-bucket-row(
    :row="row"
    bucketType="item"
  )
    template(slot="title") {{row.name}}
    template(slot="action") {{row.cost[0]}} {{row.cost[1]}}
    template(slot="sundry") {{ row.weight[0] }} {{ row.weight[1] }}
</template>

<script>
import csBucketRow from 'components/cs-bucket-row'
import { mapGetters } from 'vuex'
export default {
  name: 'cs-item',
  data () {
    return {
    }
  },
  props: ['row'],
  components: {
    csBucketRow
  },
  computed: {
    ...mapGetters('item', [
      'getById',
      'getOptions'
    ]),
    itemOptions: {
      get () {
        return this.getOptions()
      }
    }
  },
  methods: {
    getWeaponRange (id) {
      let length = this.getById(id).range.length
      let range = ''
      if (!length) { return '0' }
      range += this.getById(id).range[0]
      if (this.getById(id).range.length > 1) {
        range += ' / ' + this.getById(id).range[1]
      }
      return range
    }
  }
}
</script>

<style lang="stylus">

</style>
