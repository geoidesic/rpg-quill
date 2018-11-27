<template lang="pug">
  div.clearfix.item
    div.left.inline.drag-handle
      q-icon(
        name="drag_indicator"
      )
    div.left.title
      slot(name="title")
    div.left.action
      slot(name="action")
    div.left.sundry
      span (
      slot(name="sundry")
      span )
</template>

<script>
export default {
  name: 'cs-item',
  data () {
    return {
      editing: false
    }
  },
  props: ['item', 'bucketType'],
  mounted () {
  },
  computed: {

    adding: {
      get () {
        return this.$store.state[this.bucketType].adding
      },
      set (val) {
        this.$store.state[this.bucketType].adding = true
      }
    }

  }
}
</script>

<style lang="stylus">
@import "~variables"
.item {
  background-color: rgba(255,255,255,0.2)
  padding: 4px 8px
  border-bottom: 2px solid $secondary
  .title {
    text-transform: capitalize
  }
  .action {
    font-size: 80%
    margin: 0 0.3rem
    background-color: $tertiary
    padding: 4px
    border: 0px solid transparent
    border-radius: 5px
    cursor: pointer
  }
  .sundry {
    font-size: 90%
    border: 0px solid transparent
    padding: 2px
  }
}
</style>
