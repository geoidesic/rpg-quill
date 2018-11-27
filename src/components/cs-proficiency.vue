<template lang="pug">
  cs-bucket-row(
    :row="row"
    bucketType="proficiency"
  )
    template(slot="title") {{row.name}}
    template(slot="action") {{row.attribute}}
    template(slot="sundry")
</template>

<script>
import csBucketRow from 'components/cs-bucket-row'
import { mapGetters } from 'vuex'
export default {
  name: 'cs-proficiency',
  data () {
    return {
    }
  },
  props: ['row'],
  components: {
    csBucketRow
  },
  computed: {
    ...mapGetters('proficiency', [
      'getById',
      'getOptions'
    ]),
    proficiencyOptions: {
      get () {
        return this.getOptions()
      }
    }
  },
  methods: {
    getSkillRange (id) {
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
