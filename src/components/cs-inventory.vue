<template lang="pug">
  q-card(
    inline
    color="secondary"
    text-color="white"
    dark
    class="q-ma-sm"
  )
    q-card-title Inventory
    q-card-separator
    q-card-main
      q-card-actions
        q-btn(
          color="primary"
          @click="edit()"
          v-if="!editing"
        ) Edit
        q-btn(
          color="primary"
          @click="add()"
          v-if="!adding"
        ) +
</template>

<script>
export default {
  name: 'csInventory',
  data () {
    return {
      editing: false,
      adding: false
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
    }
  }
}
</script>

<style>
</style>
