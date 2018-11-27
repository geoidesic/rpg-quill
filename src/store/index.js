import Vue from 'vue'
import Vuex from 'vuex'

import attribute from './attribute'
import effect from './effect'
import item from './item'
import proficiency from './proficiency'
import profile from './profile'
import skill from './skill'
import spell from './spell'
import weapon from './weapon'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      attribute,
      effect,
      item,
      proficiency,
      profile,
      skill,
      spell,
      weapon
    }
  })

  return Store
}
