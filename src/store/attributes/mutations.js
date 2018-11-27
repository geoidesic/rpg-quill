// import { mapGetters } from 'vuex'
import index from '../index'
console.log(index)
// let computed = {
//   ...mapGetters([
//     'getAttributeById',
//     'getModifier'
//   ])
// }

// export default {
//   SET_ATTRIBUTE: (state, obj) => {
//     console.log('obj: ', obj)
//     let attribute = computed.getAttributeById(obj.id)
//     attribute.full = obj.val
//   },
//   SET_MODIFIED: (state, obj) => {
//     let attribute = computed.getAttributeById(obj.id)
//     attribute.modified = obj.val
//   }
// }

export const SET_ATTRIBUTE = (state, obj) => {
  const store = index()
  let attribute = store.getters['attributes/getAttributeById'](obj.id)
  attribute.full = obj.val
  store.commit('attributes/SET_MODIFIED', obj)
}

export const SET_MODIFIED = (state, obj) => {
  const store = index()
  let attribute = store.getters['attributes/getAttributeById'](obj.id)
  attribute.modified = obj.val
}
