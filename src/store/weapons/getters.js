export const getById = (state) => (id) => {
  return state.options.find(weapon => weapon.id === id)
}

export const getSelectOptions = (state) => () => {
  let options = []
  state.options.forEach(function (item, index) {
    options.push({ label: item.name, value: item.id })
  })
  return options
}
