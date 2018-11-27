export const getById = (state) => (id) => {
  return state.options.find(spell => spell.id === id)
}

export const getByName = (state) => (name) => {
  return state.options.find(spell => spell.name === name)
}

function findSpellDamageForLevel (spell, level) {
  var dmgLevel = 1
  for (var property in spell.dmg) {
    if (spell.dmg.hasOwnProperty(property)) {
      if (property === level) {
        return spell.dmg[property]
      }
      if (property < level) {
        dmgLevel = property
      }
    }
  }
  var result = spell.dmg[dmgLevel]
  if (result === undefined) {
    return false
  }
  return result
}

function formatDamageForSelect (dmg) {
  if (!dmg) {
    return ''
  }
  return '[' + dmg + ']'
}

var wizardSpelltable = {
  1: {
    bonus: 2,
    features: ['spellcasting', 'arcane recovery'],
    cantrips: 3,
    slots: {
      1: 2
    }
  },
  2: {
    bonus: 2,
    features: ['arcane tradition'],
    cantrips: 3,
    slots: {
      1: 3
    }
  },
  3: {
    bonus: 2,
    features: [],
    cantrips: 3,
    slots: {
      1: 4,
      2: 2
    }
  },
  4: {
    bonus: 2,
    features: ['ability score'],
    cantrips: 4,
    slots: {
      1: 4,
      2: 3
    }
  },
  5: {
    bonus: 3,
    features: [],
    cantrips: 4,
    slots: {
      1: 4,
      2: 3,
      3: 2
    }
  },
  6: {
    bonus: 3,
    features: ['arcane tradition'],
    cantrips: 4,
    slots: {
      1: 4,
      2: 3,
      3: 3
    }
  },
  7: {
    bonus: 3,
    features: [],
    cantrips: 4,
    slots: {
      1: 4,
      2: 3,
      3: 3,
      4: 1
    }
  }
}

function getMaxSpellLevel (profile) {
  var highest = 1
  switch (profile.class) {
    case 'wizard':
      let slots = wizardSpelltable[profile.level].slots
      for (var property in slots) {
        if (slots.hasOwnProperty(property)) {
          highest = property
        }
      }
      break
  }
  return highest
}

export const getSelectOptions = (state) => (profile) => {
  let options = []
  let level = profile.level.toString()
  let maxSpellLevel = parseInt(getMaxSpellLevel(profile))
  state.options.forEach(function (spell, index) {
    if (spell.level > maxSpellLevel) {
      return options
    }
    if (profile.class === spell.class) {
      options.push({ label:
        spell.name +
          ' &mdash; ' +
          spell.class +
          ' (lvl. ' +
          spell.level +
          ')' + ' ' +
          formatDamageForSelect(findSpellDamageForLevel(spell, level)),
      value: spell.id })
    }
  })

  return options
}
