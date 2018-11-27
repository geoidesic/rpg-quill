export const getById = (state) => (id) => {
  return state.options.find(proficiency => proficiency.id === id)
}

export const getByName = (state) => (name) => {
  return state.options.find(proficiency => proficiency.name === name)
}
import H from '../../utils/helpers.js'
export const getSelectOptions = (state) => () => {
  let options = []
  state.options.forEach(function (item, index) {
    options.push({ label: H.ucfirst(item.name), value: item.id })
  })
  return options
}
