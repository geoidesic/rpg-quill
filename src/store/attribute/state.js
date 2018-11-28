import { LocalStorage } from 'quasar'
let state = {
  adding: false,
  editing: false,
  equipped: [],
  options: [
    {
      id: 1,
      name: 'Strength',
      aka: 'ST',
      full: 10,
      buffs: [],
      buffTotal: 0,
      debuffs: [],
      debuffTotal: 0,
      modified: 10,
      showModifier: true
    },
    {
      id: 2,
      name: 'Dexterity',
      aka: 'DX',
      full: 10,
      buffs: [],
      buffTotal: 0,
      debuffs: [],
      debuffTotal: 0,
      modified: 10,
      showModifier: true
    },
    {
      id: 3,
      name: 'Constitution',
      aka: 'CN',
      full: 10,
      buffs: [],
      buffTotal: 0,
      debuffs: [],
      debuffTotal: 0,
      modified: 10,
      showModifier: true
    },
    {
      id: 4,
      name: 'Intelligence',
      aka: 'IN',
      full: 10,
      buffs: [],
      buffTotal: 0,
      debuffs: [],
      debuffTotal: 0,
      modified: 10,
      showModifier: true
    },
    {
      id: 5,
      name: 'Wisdom',
      aka: 'WS',
      full: 10,
      buffs: [],
      buffTotal: 0,
      debuffs: [],
      debuffTotal: 0,
      modified: 10,
      showModifier: true
    },
    {
      id: 6,
      name: 'Charisma',
      aka: 'CH',
      full: 10,
      buffs: [],
      buffTotal: 0,
      debuffs: [],
      debuffTotal: 0,
      modified: 10,
      showModifier: true
    },
    {
      id: 7,
      name: 'Hit Points',
      aka: 'HP',
      full: 10,
      buffs: [],
      buffTotal: 0,
      debuffs: [],
      debuffTotal: 0,
      modified: 10,
      showModifier: false
    }
  ]
}

if (LocalStorage.has('attribute')) {
  state = LocalStorage.get.item('attribute')
}

export default state
