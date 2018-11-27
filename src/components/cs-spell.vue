<template lang="pug">
  cs-bucket-row(
    :row="row"
    bucketType="spell"
  )
    template(slot="title") {{row.name}}
    template(slot="action") {{row.dmg[0]}} {{row.dmg[1]}}
    template(slot="sundry") {{ row.level }}
</template>

<script>
import csBucketRow from 'components/cs-bucket-row'
import { mapGetters } from 'vuex'
export default {
  name: 'cs-spell',
  data () {
    return {
    }
  },
  props: ['row'],
  components: {
    csBucketRow
  },
  computed: {
    ...mapGetters('spell', [
      'getById',
      'getOptions'
    ]),
    spellOptions: {
      get () {
        return this.getOptions()
      }
    }
  },
  methods: {
    getSpellRange (id) {
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
