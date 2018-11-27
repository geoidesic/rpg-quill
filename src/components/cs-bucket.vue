<template lang="pug">
  q-card(
    inline
    color="secondary"
    text-color="white"
    dark
    v-bind:class="cssClassObject"
  )
    q-card-title.clearfix {{ bucketName }}
      component(
        :is="rowAdder"
        v-if="adding"
        :bucketType="bucketType"
      )
      q-btn(
        class="right"
        color="primary"
        @click="add()"
        v-if="!adding"
        ) +
    q-card-separator
    q-card-main
      draggable(
        class="list"
        :options="{handle:'.drag-handle'}" @update="sort"
      )
        component(
          :is="rowHandler"
          v-for="(row, index) in equipped" v-bind:id="getRowId(row.id)"
          :row="row"
          :key="index"
          :index="index"
        )
</template>

<script>
import H from '../utils/helpers.js'
import draggable from 'vuedraggable'
import csEffect from 'components/cs-effect'
import csEffectAdd from 'components/cs-effect-add'
import csItem from 'components/cs-item'
import csItemAdd from 'components/cs-item-add'
import csProficiency from 'components/cs-proficiency'
import csProficiencyAdd from 'components/cs-proficiency-add'
import csSpell from 'components/cs-spell'
import csSpellAdd from 'components/cs-spell-add'
import csWeapon from 'components/cs-weapon'
import csWeaponAdd from 'components/cs-weapon-add'
export default {
  name: 'cs-bucket',
  data () {
    return {
    }
  },
  props: ['bucketType', 'bucketName'],
  computed: {
    rowHandler () {
      return 'cs' + H.ucfirst(this.bucketType)
    },
    rowAdder () {
      return 'cs' + H.ucfirst(this.bucketType) + 'Add'
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
        return this.$store.state[this.bucketType].equipped
      },
      set (val) {

      }
    },
    adding: {
      get () {
        return this.$store.state[this.bucketType].adding
      },
      set (val) {
        this.$store.state[this.bucketType].adding = true
      }
    }
  },
  components: {
    draggable,
    csEffect,
    csEffectAdd,
    csItem,
    csItemAdd,
    csProficiency,
    csProficiencyAdd,
    csSpell,
    csSpellAdd,
    csWeapon,
    csWeaponAdd
  },
  methods: {
    sort () {

    },
    getRowId (id) {
      return 'item-row-' + id
    },
    add () {
      this.editing = false
      this.adding = true
    }
  }
}
</script>

<style lang="stylus">
.bucket {
  min-width: 200px
}
.list {
  padding: 10px 0 0 0
}
</style>
