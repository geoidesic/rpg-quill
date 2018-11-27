export const getById = (state) => (id) => {
  return state.options.find(skill => skill.id === id)
}

export const getByName = (state) => (name) => {
  return state.options.find(skill => skill.name === name)
}

export const getSelectOptions = (state) => () => {
  let options = []
  state.options.forEach(function (item, index) {
    options.push({ label: item.name, value: item.id })
  })
  return options
}
