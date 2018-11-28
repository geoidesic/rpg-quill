<template lang="pug">
  cs-bucket-row(
    :row="row"
    bucketType="attribute"
  )
    template(v-if="!editing" slot="title") {{ row.aka }}
    template(v-if="!editing" slot="action") {{ row.full }}
    template(v-if="!editing" slot="sundry")
      div ({{ row.modified }})
        span( v-if="row.showModifier" )
          span.padded.muted
          span.modifer
            span.info(v-if="modifier === 0") 0
            span.positive(v-if="modifier > 0") +
            span.positive(v-if="modifier > 0") {{ modifier }}
            span.negative(v-if="modifier < 0") -
            span.negative(v-if="modifier < 0") {{ modifier }}
</template>

<script>
import csBucketRow from 'components/cs-bucket-row'
import { mapGetters } from 'vuex'
export default {
  name: 'cs-attribute',
  data () {
    return {
    }
  },
  props: ['row'],
  components: {
    csBucketRow
  },
  computed: {
    ...mapGetters('attribute', [
      'getById',
      'getOptions',
      'getModifier'
    ]),
    attributeOptions: {
      get () {
        return this.getOptions()
      }
    },
    modifier: {
      set (val) {

      },
      get () {
        return this.getModifier(this.row.id)
      }
    },
    editing: {
      get () {
        return this.$store.state.attribute.editing
      }
    }
  },
  methods: {
    getWeaponRange (id) {
      let length = this.getById(id).range.length
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
.attribute {
  font-size: 1rem
  .full {
    font-weight: bold
  }
}
.q-if-label {
  color: $tertiary
  font-weight: bold
}
.padded {
  padding: 4px 0;
}
.muted .q-if-label {
  color: $tertiary
}
.row.attribute {
  margin: 0 0 0 -5px
  padding: 0 !important
  border-bottom: 1px dashed #fff
}
.modifer {
  padding: 0 3px
  margin: 0 5px
  background: #fff
  display: inline-block
  width: 2rem
  border-radius: 3px
  border: 1px solid transparent
  text-align: center
}
.positive {
  font-weight: bold
  padding: 1px
  color: $positive
}
.negative {
  padding: 1px
  color: $negative
}
.warning {
  padding: 1px
  color: $warning
}
.info {
  padding: 1px
  color: $info
}

</style>
