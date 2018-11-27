<template lang="pug">
  cs-bucket-row(
    :row="row"
    bucketType="weapon"
  )
    template(slot="title") {{row.name}}
    template(slot="action") {{row.damage[0]}} {{row.damage[1]}}
    template(slot="sundry") {{ getWeaponRange(row.id) }}
</template>

<script>
import csBucketRow from 'components/cs-bucket-row'
import { mapGetters } from 'vuex'
export default {
  name: 'cs-weapon',
  data () {
    return {
    }
  },
  props: ['row'],
  components: {
    csBucketRow
  },
  computed: {
    ...mapGetters('weapon', [
      'getById',
      'getOptions'
    ]),
    weaponOptions: {
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
