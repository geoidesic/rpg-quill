<template lang="pug">
  cs-bucket-row(
    :row="row"
    bucketType="effect"
  )
    template(slot="title") {{row.name}}
    template(slot="action")
    template(slot="sundry")
</template>

<script>
import csBucketRow from 'components/cs-bucket-row'
import { mapGetters } from 'vuex'
export default {
  name: 'cs-effect',
  data () {
    return {
    }
  },
  props: ['row'],
  components: {
    csBucketRow
  },
  computed: {
    ...mapGetters('effect', [
      'getById',
      'getOptions'
    ]),
    effectOptions: {
      get () {
        return this.getOptions()
      }
    }
  },
  methods: {
    getEffectRange (id) {
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
