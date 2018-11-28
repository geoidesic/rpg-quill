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
      slot(name="sundry")
    q-btn(
      v-if="adding"
      icon="clear"
      size="xs"
      color="primary"
      class="action right"
      @click="clear()"
    )
    q-btn(
      v-if="adding"
      icon="edit"
      size="xs"
      color="primary"
      class="action right"
      @click="edit()"
    )
</template>

<script>
export default {
  name: 'cs-bucket-rows',
  data () {
    return {
      editing: false
    }
  },
  props: ['row', 'bucketType'],
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
  },
  methods: {
    clear () {
      console.log(this.row)
      this.$store.commit(this.bucketType + '/CLEAR', this.row.id)
      this.$store.dispatch(this.bucketType + '/ASSIGN')
    },
    edit () {
      this.$store.commit([this.bucketType + '/EDITING'], true)
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
