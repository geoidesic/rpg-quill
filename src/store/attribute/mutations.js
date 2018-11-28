import index from '../index'

export const ASSIGN = (state, obj) => {
  // check if it's already equipped
  let found = state.equipped.find(attribute => attribute.id === obj.id)
  if (!found) {
    state.equipped.push(obj)
  }
  state.adding = false
}

export const CLEAR = (state, obj) => {
  state.equipped.splice(state.equipped.find(item => item.id === obj.id), 1)
}

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

export const EDITING = (state, value) => {
  state.editing = value
}
