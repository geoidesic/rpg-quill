<template lang="pug">
  cs-item(
    :item="item"
    bucketType="bucketType"
  )
    template(slot="title") {{item.name}}
    template(slot="action") {{item.damage[0]}} {{item.damage[1]}}
    template(slot="sundry") {{ getWeaponRange(item.id) }}
</template>

<script>
import csItem from 'components/cs-item'
import { mapGetters } from 'vuex'
export default {
  name: 'cs-weapon',
  data () {
    return {
      editing: false
    }
  },
  props: ['item'],
  components: {
    csItem
  },
  mounted () {
  },
  computed: {
    ...mapGetters('weapons', [
      'getById',
      'getOptions'
    ]),
    weaponOptions: {
      get () {
        return this.getOptions()
      }
    },
    adding: {
      get () {
        return this.$store.state.weapons.adding
      },
      set (val) {
        this.$store.state.weapons.adding = true
      }
    }

  },
  methods: {
    add () {
      console.log('edit')
      this.editing = true
      this.adding = false
    },
    edit () {
      console.log('edit')
      this.editing = true
      this.adding = false
    },
    getWeaponRange (id) {
      let length = this.getById(id).range.length
      console.log('length: ', length)
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
@import "~variables"
.weapon {
  background-color: rgba(255,255,255,0.2)
  padding: 4px 8px
  border-bottom: 2px solid $secondary
  .dmg {
    font-size: 80%
    margin: 0 0.3rem
    background-color: $tertiary
    padding: 4px
    border: 0px solid transparent
    border-radius: 5px
  }
}
</style>
