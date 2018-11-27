<template lang="pug">
  .row.attribute.gutter-xs
    q-field.col-md-4.full
      .padded(v-if="!editing")
        .q-if-label {{ identifier }}
        div {{ full_val }}
      q-input(
        v-if="editing"
        type="number"
        v-model="full_val"
        v-bind:stack-label="identifier"
        max=30
        min=1
      )
    q-field.col-md-4.temp
      .padded(v-if="!affecting")
        .q-if-label &nbsp;
        div ({{ temp_val }})
      q-input(
        v-if="affecting"
        type="number"
        v-model="temp_val"
        stack-label=" "
        max=30
        min=1
      )
    q-field.col-md-4
      .padded.muted(v-if="showMod !=='false'")
        .q-if-label Mod
        .modifer
          span.info(v-if="modifier === 0") 0
          span.positive(v-if="modifier > 0") +
          span.positive(v-if="modifier > 0") {{ modifier }}
          span.negative(v-if="modifier < 0") -
          span.negative(v-if="modifier < 0") {{ modifier }}
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'cs-attribute',
  data () {
    return {
    }
  },
  props: ['identifier', 'editing', 'affecting', 'showMod'],
  watch: {
    full_val: {
      immediate: true,
      deep: true,
      handler (value) {
        this.temp_val = value
      }
    }
  },
  computed: {
    ...mapGetters('attribute', [
      'getAttributeById',
      'getModifier'
    ]),
    full_val: {
      set (val) {
        this.$store.commit('attribute/SET_ATTRIBUTE', { id: this.identifier, val: val })
      },
      get () {
        return this.getAttributeById(this.identifier).full
      }
    },
    temp_val: {
      set (val) {

      },
      get () {
        return this.getAttributeById(this.identifier).modified
      }
    },
    modifier: {
      set (val) {

      },
      get () {
        return this.getModifier(this.identifier)
      }
    }

  },
  created () {
  },
  methods: {
    ...mapMutations('attribute', [
      'SET_ATTRIBUTE',
      'SET_MODIFIED'
    ])
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
.q-field {
  .modifer {
    padding: 0 3px
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
}
</style>
