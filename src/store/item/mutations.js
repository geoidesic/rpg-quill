
export const ASSIGN = (state, obj) => {
  // check if it's already equipped
  let found = state.equipped.find(item => item.id === obj.id)
  if (!found) {
    state.equipped.push(obj)
  }
  state.adding = false
}
