<template lang="pug">
  q-page.dragon.q-mt-xs.q-px-xs
    .demo.row.gutter-xs
      .col-xs-12.col-sm-5.col-lg-2
        cs-profile
      .col-xs-5.col-sm-3.col-lg-1
        cs-attributes
      .col-xs-7.col-sm-4.col-lg-2
        cs-proficiencies
      .col-xs-12.col-sm-6.col-lg-2
        cs-weapons
      .col-xs-12.col-sm-6.col-lg-1
        cs-effects
      .col-xs-12.col-sm-6.col-lg-2
        cs-items
      .col-xs-12.col-sm-6.col-lg-2
        cs-spells
</template>

<style lang="stylus">
.dragon:after
  content : "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity : 0.2;
  z-index: -1;
  background-image: url('../statics/dragon-tile.png')
  background-opacity: 0.5
.label-heading
  font-weight: bold;
.card-1
  width: 220px
  display: inline-block
.avatar
  margin: 1rem
.top-space
  margin-top: 1rem
.q-card-main
  padding-top: 0
@media print
  .no-print, .no-print *, .q-btn
    display: none !important;
.hide
  display: none
</style>

<script>
/*
@TODO:
== PC ==
- implement vuex to store state
- add skill form: title, description, add field (with label, description, value and validation)
- select skill from predefined data set (based on parameters)
- save skill as template
- create new skill from template
- save attributes as template
- load attributes from template
- create character from template
- set RPG type (which determines the available templates)
- shorten template by splitting into components
- implement web sotrage api for basic offline persistence of data
- implement export / import for saving to and loading from data source (which may be local jSON, but may also be online server account)
- local storage should only store single character
- online storage should enable laoding of single character for PC by PC
- and also allow DM to load all PC's plus an encounter, which includes various NPC's and monsters for this the given RPG
- roll dice
- add weapons
== DM ==
- save templates (attributes, skills, class, race)
- save templates to a RPG system
- create monster template
- create monster from template
- create weapon
- create item
- create magic item
- create effect
- create spell (type of skill)
 */
import csProfile from 'components/cs-profile'
import csAttributes from 'components/cs-attributes'
import csWeapons from 'components/cs-weapons'
import csEffects from 'components/cs-effects'
import csProficiencies from 'components/cs-proficiencies'
import csItems from 'components/cs-items'
import csSpells from 'components/cs-spells'
export default {
  name: 'PageIndex',
  components: {
    csProfile,
    csAttributes,
    csWeapons,
    csProficiencies,
    csEffects,
    csItems,
    csSpells
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
