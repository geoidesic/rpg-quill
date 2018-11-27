<template lang="pug">
  q-card(
    inline
    color="secondary"
    text-color="white"
    dark
    v-bind:class="cssClassObject"
  )
    q-card-title.clearfix Weapons
      q-btn(
        class="right"
        color="primary"
        @click="add()"
        v-if="!adding"
        ) +
    q-card-separator
    q-card-main
      component(
        :is="itemAdder"
        v-if="adding"
        :bucketType="bucketType"
      )
      draggable(
        class="list"
        :options="{handle:'.drag-handle'}" @update="sort"
      )
        component(
          :is="itemHandler"
          v-for="(item, index) in equipped" v-bind:id="getRowId(item.id)"
          :item="item"
          :key="index"
          :index="index"
        )
      q-card-actions
</template>

<script>
/**
 * A generic component for creating a bucket which holds an instance list
 * of items assigned from a master list.
 * @TODO: ideally items are also editable / addable directly instead of
 * from a master list
 */
// import H from '../utils/helpers.js'
import draggable from 'vuedraggable'
import csWeapon from 'components/cs-weapon'
import csWeaponAdd from 'components/cs-weapon-add'
// import csSkill from 'components/cs-skill'
// import csEffect from 'components/cs-effect'
import csAttribute from 'components/cs-attribute'
// import csItem from 'components/cs-item'
// import csAssign from 'components/cs-assign'
export default {
  name: 'cs-bucket',
  data () {
    return {
    }
  },
  mounted () {
    console.log('this.equipped: ', this.equipped)
  },
  props: ['bucketType'],
  computed: {
    itemHandler () {
      return 'csWeapon'
    },
    itemAdder () {
      return 'csWeaponAdd'
    },
    cssClassObject: {
      get () {
        return {
          'q-ma-sm': true,
          'bucket': true
        }
      }
    },
    equipped: {
      get () {
        console.log('getting equipped: ', this.$store.state[this.bucketType].equipped)
        return this.$store.state[this.bucketType].equipped
      },
      set (val) {

      }
    },
    adding: {
      get () {
        console.log(this.bucketType)
        console.log(this.$store.state)
        console.log(this.$store.state[this.bucketType])
        return this.$store.state[this.bucketType].adding
      },
      set (val) {
        this.$store.state[this.bucketType].adding = true
      }
    }
  },
  components: {
    csWeapon,
    csWeaponAdd,
    // csSkill,
    // csEffect,
    csAttribute,
    // csItem,
    // csAssign,
    draggable
  },
  methods: {
    getRowId (id) {
      return 'item-row-' + id
    },
    add () {
      this.editing = false
      this.adding = true
    },
    edit () {
      console.log('edit')
      this.editing = true
      this.adding = false
    },
    sort () {

    }
  }
}
</script>

<style lang="stylus">
.weapons {
  min-width: 250px
}
.list {
  padding: 10px 0 0 0
}
</style>
