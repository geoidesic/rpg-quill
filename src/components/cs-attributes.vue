<template lang="pug" >
  q-card(
    inline
    color="secondary"
    text-color="white"
    dark
    class="q-ma-sm attributes"
  )
    q-card-title Attributes
    q-card-separator
    q-card-main
      cs-attribute(
        identifier="HP"
        showMod="false"
        :editing="editing"
        :affecting="affecting"
      )
      cs-attribute(
        identifier="ST"
        :editing="editing"
        :affecting="affecting"
      )
      cs-attribute(
        identifier="DX"
        :editing="editing"
        :affecting="affecting"
      )
      cs-attribute(
        identifier="CN"
        :editing="editing"
        :affecting="affecting"
      )
      cs-attribute(
        identifier="IN"
        :editing="editing"
        :affecting="affecting"
      )
      cs-attribute(
        identifier="WS"
        :editing="editing"
        :affecting="affecting"
      )
      cs-attribute(
        identifier="CH"
        :editing="editing"
        :affecting="affecting"
      )
      q-card-actions
        q-btn(
          color="primary"
          @click="edit()"
          v-if="!editing"
        ) Edit
        q-btn(
          color="primary"
          @click="save()"
          v-if="editing"
        ) Save
        q-btn(
          color="primary"
          v-if="!affecting"
          @click="affect()"
        ) FX
        q-btn(
          color="primary"
          @click="saveFx()"
          v-if="affecting"
        ) Save
</template>
<script>
import csAttribute from 'components/cs-attribute'
export default {
  name: 'csAttributes',
  components: {
    csAttribute
  },
  data () {
    return {
      editing: false,
      affecting: false
    }
  },
  methods: {
    add () {
      console.log('add')
      this.editing = true
      this.affecting = false
    },
    edit () {
      console.log('edit')
      this.editing = true
      this.affecting = false
    },
    affect () {
      console.log('affect')
      this.$q.localStorage.set('attributes', this.$store.state.attributes)
      this.editing = false
      this.affecting = true
    },
    save () {
      console.log('save')
      console.log(this.$store.state)
      this.$q.localStorage.set('attributes', this.$store.state.attributes)
      this.editing = false
    }
  }
}
</script>

<style lang="stylus">
.attributes {
  min-width: 150px
}
</style>
