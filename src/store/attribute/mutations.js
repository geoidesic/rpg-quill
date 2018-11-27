import index from '../index'

export const SET_ATTRIBUTE = (state, obj) => {
  const store = index()
  let attribute = store.getters['attribute/getAttributeById'](obj.id)
  attribute.full = obj.val
  store.commit('attribute/SET_MODIFIED', obj)
}

export const SET_MODIFIED = (state, obj) => {
  const store = index()
  let attribute = store.getters['attribute/getAttributeById'](obj.id)
  attribute.modified = obj.val
}
