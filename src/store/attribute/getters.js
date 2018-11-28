/*
export function someGetter (state) {
}
*/

export const getBuffTotal = (state, getters) => (id) => {
  let attribute = getters.getById(id)
  return attribute.buffTotal
}

export const calculateBuffTotal = (state, getters) => (id) => {
  let attribute = getters.getById(id)
  let buffTotal = 0
  if (attribute.buffs.length) {
    attribute.buffs.forEach(function (buff, index) {
      buffTotal += buff.val
    })
  }
  return buffTotal
}
export const getbuffTotal = (state, getters) => (id) => {
  let attribute = getters.getById(id)
  return attribute.debuffTotal
}
export const calculateDebuffTotal = (state, getters) => (id) => {
  let attribute = getters.getById(id)
  let debuffTotal = 0
  if (attribute.debuffs.length) {
    attribute.debuffs.forEach(function (debuff, index) {
      debuffTotal += debuff.val
    })
  }
  return debuffTotal
}
export const calculateModified = (state, getters) => (id) => {
  let attribute = getters.getById(id)
  let debuffTotal = getters.getDebuffTotal(id)
  let buffTotal = getters.getBuffTotal(id)
  let buffmods = buffTotal - debuffTotal
  let modified = attribute.full + buffmods
  return modified
}

export const getModifier = (state, getters) => (id) => {
  let val = getters.getById(id).modified
  if (val < 2) { return -5 }
  if (val < 4) { return -4 }
  if (val < 6) { return -3 }
  if (val < 8) { return -2 }
  if (val < 10) { return -1 }
  if (val < 12) { return 0 }
  if (val < 14) { return 1 }
  if (val < 16) { return 2 }
  if (val < 18) { return 3 }
  if (val < 20) { return 4 }
  if (val < 22) { return 5 }
  if (val < 24) { return 6 }
  if (val < 26) { return 7 }
  if (val < 28) { return 8 }
  if (val < 30) { return 9 }
  if (val >= 30) { return 10 }
}

export const getById = (state) => (id) => {
  return state.options.find(attribute => attribute.id === id)
}

export const getByName = (state) => (name) => {
  return state.options.find(attribute => attribute.name === name)
}

export const getSelectOptions = (state) => () => {
  let options = []
  state.options.forEach(function (item, index) {
    options.push({ label: item.name, value: item.id })
  })
  return options
}
