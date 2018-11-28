
export const ASSIGN = (state, obj) => {
  // check if it's already equipped
  let found = state.equipped.find(item => item.id === obj.id)
  if (!found) {
    state.equipped.push(obj)
  }
  state.adding = false
}

export const CLEAR = (state, obj) => {
  state.equipped.splice(state.equipped.find(item => item.id === obj.id), 1)
}
