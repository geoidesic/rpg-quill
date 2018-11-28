import { LocalStorage } from 'quasar'
let state = {
  adding: false,
  editing: false,
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
      properties: ['finesse', 'thrown'],
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
    },
    {
      id: 14,
      type: ['martial', 'melee'],
      name: 'battleaxe',
      cost: [10, 'gp'],
      damage: ['1d8', 'slashing'],
      weight: [4, 'lb.'],
      properties: ['versatile'],
      range: [5]
    },
    {
      id: 15,
      type: ['martial', 'melee'],
      name: 'flail',
      cost: [10, 'gp'],
      damage: ['1d8', 'bludgeoning', '1d10'],
      weight: [2, 'lb.'],
      properties: [],
      range: [5]
    },
    {
      id: 16,
      type: ['martial', 'melee'],
      name: 'glaive',
      cost: [20, 'gp'],
      damage: ['1d10', 'slashing'],
      weight: [6, 'lb.'],
      properties: ['heavy', 'reach', 'two-handed'],
      range: [5]
    },
    {
      id: 17,
      type: ['martial', 'melee'],
      name: 'greataxe',
      cost: [30, 'gp'],
      damage: ['1d12', 'slashing'],
      weight: [7, 'lb.'],
      properties: ['heavy', 'two-handed'],
      range: [5]
    },
    {
      id: 18,
      type: ['martial', 'melee'],
      name: 'greatsword',
      cost: [50, 'gp'],
      damage: ['2d6', 'slashing'],
      weight: [6, 'lb.'],
      properties: ['heavy', 'two-handed'],
      range: [5]
    },
    {
      id: 19,
      type: ['martial', 'melee'],
      name: 'halberd',
      cost: [20, 'gp'],
      damage: ['1d10', 'slashing'],
      weight: [6, 'lb.'],
      properties: ['heavy', 'reach', 'two-handed'],
      range: [5]
    },
    {
      id: 19,
      type: ['martial', 'melee'],
      name: 'lance',
      cost: [10, 'gp'],
      damage: ['1d12', 'piercing'],
      weight: [6, 'lb.'],
      properties: ['reach', 'special'],
      special: 'You have disadvantage when you use a lance to attack a target within 5 feet of you. Also, a lance requires two hands to wield when you aren’t mounted.',
      range: [5]
    },
    {
      id: 20,
      type: ['martial', 'melee'],
      name: 'longsword',
      cost: [15, 'gp'],
      damage: ['1d8', 'slashing', '1d10'],
      weight: [3, 'lb.'],
      properties: ['versatile'],
      range: [5]
    },
    {
      id: 21,
      type: ['martial', 'melee'],
      name: 'maul',
      cost: [10, 'gp'],
      damage: ['2d6', 'bludgeoning'],
      weight: [10, 'lb.'],
      properties: ['heavy', 'two-handed'],
      range: [5]
    },
    {
      id: 22,
      type: ['martial', 'melee'],
      name: 'morningstar',
      cost: [15, 'gp'],
      damage: ['1d8', 'piercing'],
      weight: [4, 'lb.'],
      properties: [],
      range: [5]
    },
    {
      id: 24,
      type: ['martial', 'melee'],
      name: 'pike',
      cost: [5, 'gp'],
      damage: ['1d10', 'piercing'],
      weight: [18, 'lb.'],
      properties: ['heavy', 'reach', 'two-handed'],
      range: [5]
    },
    {
      id: 24,
      type: ['martial', 'melee'],
      name: 'rapier',
      cost: [25, 'gp'],
      damage: ['1d8', 'piercing'],
      weight: [2, 'lb.'],
      properties: ['finesse'],
      range: [5]
    },
    {
      id: 25,
      type: ['martial', 'melee'],
      name: 'scimitar',
      cost: [25, 'gp'],
      damage: ['1d6', 'slashing'],
      weight: [3, 'lb.'],
      properties: ['finesse', 'light'],
      range: [5]
    },
    {
      id: 25,
      type: ['martial', 'melee'],
      name: 'shortsword',
      cost: [10, 'gp'],
      damage: ['1d6', 'piercing'],
      weight: [2, 'lb.'],
      properties: ['finesse', 'light'],
      range: [5]
    },
    {
      id: 26,
      type: ['martial', 'melee'],
      name: 'trident',
      cost: [5, 'gp'],
      damage: ['1d6', 'piercing', '1d8'],
      weight: [4, 'lb.'],
      properties: ['thrown', 'versatile'],
      range: [20, 60]
    },
    {
      id: 27,
      type: ['martial', 'melee'],
      name: 'war pick',
      cost: [5, 'gp'],
      damage: ['1d8', 'piercing'],
      weight: [2, 'lb.'],
      properties: [],
      range: [5]
    },
    {
      id: 28,
      type: ['martial', 'melee'],
      name: 'warhammer',
      cost: [15, 'gp'],
      damage: ['1d8', 'bludgeoning', '1d10'],
      weight: [2, 'lb.'],
      properties: ['versatile'],
      range: [5]
    },
    {
      id: 29,
      type: ['martial', 'melee'],
      name: 'whip',
      cost: [2, 'gp'],
      damage: ['1d4', 'slashing'],
      weight: [3, 'lb.'],
      properties: ['finesse', 'reach'],
      range: [5]
    },
    {
      id: 30,
      type: ['martial', 'ranged'],
      name: 'blowgun',
      cost: [10, 'gp'],
      damage: ['1', 'piercing'],
      weight: [2, 'lb.'],
      properties: ['ammunition', 'loading'],
      range: [25, 100]
    },
    {
      id: 31,
      type: ['martial', 'ranged'],
      name: 'hand crossbow',
      cost: [75, 'gp'],
      damage: ['1d6', 'piercing'],
      weight: [3, 'lb.'],
      properties: ['ammunition', 'light', 'loading'],
      range: [30, 120]
    },
    {
      id: 32,
      type: ['martial', 'ranged'],
      name: 'heavy crossbow',
      cost: [50, 'gp'],
      damage: ['1d10', 'piercing'],
      weight: [18, 'lb.'],
      properties: ['ammunition', 'heavy', 'loading', 'two-handed'],
      range: [100, 400]
    },
    {
      id: 33,
      type: ['martial', 'ranged'],
      name: 'longbow',
      cost: [50, 'gp'],
      damage: ['1d8', 'piercing'],
      weight: [2, 'lb.'],
      properties: ['ammunition', 'heavy', 'two-handed'],
      range: [150, 600]
    },
    {
      id: 34,
      type: ['martial', 'ranged'],
      name: 'net',
      cost: [1, 'gp'],
      damage: [null, 'grappling'],
      weight: [3, 'lb.'],
      properties: ['special', 'thrown'],
      range: [5, 15]
    }
  ]
}

if (LocalStorage.has('weapon')) {
  state = LocalStorage.get.item('weapon')
}

export default state
