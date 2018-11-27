
export const ASSIGN = (state, obj) => {
  // check if it's already equipped
  let found = state.equipped.find(proficiency => proficiency.id === obj.id)
  if (!found) {
    state.equipped.push(obj)
  }
  state.adding = false
}
