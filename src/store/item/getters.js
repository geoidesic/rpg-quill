export const getById = (state) => (id) => {
  return state.options.find(item => item.id === id)
}

export const getByName = (state) => (name) => {
  return state.options.find(item => item.name === name)
}

export const getSelectOptions = (state) => () => {
  let options = []
  state.options.forEach(function (item, index) {
    options.push({ label:
      item.name +
        ' &mdash; [' +
        item.cost[0] +
        item.cost[1] +
        ', ' +
        item.weight[0] +
        ' ' + item.weight[1] +
        ']',
    value: item.id })
  })
  return options
}
