<template lang="pug">
  q-card(
    inline
    color="secondary"
    text-color="white"
    dark
    v-bind:class="cssClassObject"
    )
    q-card-title.clearfix {{ bucketName }}
      q-btn.col-sm-3(
        class="right action"
        color="primary"
        @click="add()"
        v-if="!adding"
        icon="edit"
        )
      div.clearfix.row
        component.left.col-sm-8(
          :is="rowAdder"
          v-if="adding"
          :bucketType="bucketType"
          )
        q-btn.col-sm-3(
          class="right action"
          color="negative"
          @click="cancel()"
          v-if="adding"
          icon="exit_to_app"
          )
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
      q-card-actions
        slot.col(name="actions")
</template>

<script>
import H from '../utils/helpers.js'
import draggable from 'vuedraggable'
import csAttribute from 'components/cs-attribute'
import csAttributeAdd from 'components/cs-attribute-add'
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
          '': true,
          'bucket': true,
          'weapons': this.bucketType === 'weapon',
          'profiencies': this.bucketType === 'profiency',
          'spells': this.bucketType === 'spell',
          'effects': this.bucketType === 'effect',
          'items': this.bucketType === 'item'
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
    csAttribute,
    csAttributeAdd,
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
      this.$store.state[this.bucketType].adding = true
    },
    cancel () {
      this.$store.state[this.bucketType].adding = false
    }
  }
}
</script>

<style lang="stylus">
.bucket
  width: 100%
.list
  padding: 10px 0 0 0
.action
  font-size: 80%
  margin: 0 0.3rem
  background-color: $tertiary
  padding: 4px 8px
  border: 0px solid transparent
  border-radius: 5px
  cursor: pointer
</style>
