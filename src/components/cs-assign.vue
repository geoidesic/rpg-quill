<template lang="pug">
  div.row.gutter-xs.clearfix
    div.left
      q-select(
        filter
        :options="options"
        v-model="form.add_id"
        inverted
        color="dark"
        separator
        placeholder=""
        :display-value="text"
        class="text-truncate"
        @input="add()"
      )
    //- div.right
    //-   q-btn.right(
    //-     color="primary",
    //-     @click="add()"
    //-     v-if="adding"
    //-   ) +

</template>

<script>
/**
 * A generic component for choosing items from a list and assigning them to a bucket.
 */
export default {
  name: 'cs-assign',
  data () {
    return {
      editing: false,
      form: {
        add_id: null
      }
    }
  },
  props: ['bucketType', 'optionFinder', 'getter'],
  created () {
    this.options = this.optionFinder(this.$store.state.profile)
  },
  computed: {
    text () {
      console.log(this.options)
      console.log(this.form.add_id)
      if (this.form.add_id) {
        let split = this.options.find(item => item.value === this.form.add_id).label.split('&mdash;')
        return split[0]
      }
      return ''
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
  methods: {
    add () {
      console.log('adding')
      if (!this.form.add_id) { return }
      this.$store.commit(this.bucketType + '/ASSIGN', this.getter(this.form.add_id))
      this.$store.dispatch(this.bucketType + '/ASSIGN')
    },
    edit () {
      this.editing = true
      this.adding = false
    }
  }
}
</script>

<style lang="stylus">
.q-select {
  max-width: 287px
}
</style>
