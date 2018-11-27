import Vue from 'vue'
import Vuex from 'vuex'

import attributes from './attributes'
import weapons from './weapons'
import spells from './spells'
import skills from './skills'
import effects from './effects'
import inventory from './inventory'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      attributes,
      weapons,
      spells,
      skills,
      effects,
      inventory
    }
  })

  return Store
}
