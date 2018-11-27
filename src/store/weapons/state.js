import { LocalStorage } from 'quasar'
let state = {
  adding: false,
  equipped: [],
  options: [
    {
      id: 1,
      type: ['simple', 'melee'],
      name: 'club',
      cost: [1, 'sp'],
      damage: ['1d4', 'bludgeoning'],
      weight: [2, 'lb.'],
      properties: ['light'],
      range: [5]
    },
    {
      id: 2,
      type: ['simple', 'melee'],
      name: 'dagger',
      cost: [2, 'gp'],
      damage: ['1d4', 'piercing'],
      weight: [1, 'lb.'],
      properties: ['finesse', 'light', 'thrown'],
      range: [20, 60]
    },
    {
      id: 3,
      type: ['simple', 'melee'],
      name: 'greatclub',
      cost: [2, 'sp'],
      damage: ['1d8', 'bludgeoning'],
      weight: [10, 'lb.'],
      properties: ['two-handed'],
      range: [20, 60]
    },
    {
      id: 4,
      type: ['simple', 'melee'],
      name: 'handaxe',
      cost: [5, 'gp'],
      damage: ['1d6', 'slashing'],
      weight: [2, 'lb.'],
      properties: ['light', 'thrown'],
      range: [20, 60]
    },
    {
      id: 5,
      type: ['simple', 'melee'],
      name: 'javelin',
      cost: [5, 'sp'],
      damage: ['1d6', 'piercing'],
      weight: [2, 'lb.'],
      properties: ['thrown'],
      range: [30, 120]
    },
    {
      id: 6,
      type: ['simple', 'melee'],
      name: 'light hammer',
      cost: [2, 'gp'],
      damage: ['1d4', 'bludgeoning'],
      weight: [2, 'lb.'],
      properties: ['light', 'thrown'],
      range: [20, 60]
    },
    {
      id: 7,
      type: ['simple', 'melee'],
      name: 'mace',
      cost: [5, 'gp'],
      damage: ['1d6', 'bludgeoning'],
      weight: [4, 'lb.'],
      properties: [],
      range: [5]
    },
    {
      id: 8,
      type: ['simple', 'melee'],
      name: 'unarmed strike',
      cost: [],
      damage: ['1', 'bludgeoning'],
      weight: [],
      properties: [],
      range: [5]
    },
    {
      id: 9,
      type: ['simple', 'ranged'],
      name: 'light crossbow',
      cost: [25, 'gp'],
      damage: ['1d8', 'piercing'],
      weight: [5, 'lb.'],
      properties: ['ammunition', 'loading', 'two-handed'],
      range: [80, 320]
    },
    {
      id: 11,
      type: ['simple', 'ranged'],
      name: 'dart',
      cost: [5, 'cp'],
      damage: ['1d4', 'piercing'],
      weight: [0.5, 'lb.'],
      properties: ['finessse', 'thrown'],
      range: [20, 60]
    },
    {
      id: 12,
      type: ['simple', 'ranged'],
      name: 'shortbow',
      cost: [25, 'gp'],
      damage: ['1d6', 'piercing'],
      weight: [2, 'lb.'],
      properties: ['ammunition', 'two-handed'],
      range: [80 / 320]
    },
    {
      id: 13,
      type: ['simple', 'ranged'],
      name: 'sling',
      cost: [1, 'sp'],
      damage: ['1d4', 'bludgeoning'],
      weight: [],
      properties: ['ammunition'],
      range: [30 / 120]
    }
  ]
}

if (LocalStorage.has('weapons')) {
  state = LocalStorage.get.item('weapons')
  console.log(state)
}

export default state
