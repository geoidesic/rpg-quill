import { LocalStorage } from 'quasar'
let state = {
  name: 'Kieran Alamore',
  level: 5,
  class: 'wizard',
  race: 'human',
  options: {
    race: [
      {
        id: 1,
        name: 'human',
        abilityIncrease: {
          'ST': 1,
          'DX': 1,
          'CN': 1,
          'IN': 1,
          'WS': 1,
          'CH': 1
        },
        size: 'm',
        speed: 30,
        feats: []
      },
      {
        id: 2,
        name: 'halfling',
        abilityIncrease: {
          'DX': 2
        },
        size: 's',
        speed: 25,
        feats: [
          'lucky',
          'brave',
          'halfling nimbleness'
        ],
        subraces: [
          {
            id: 1,
            hame: 'lightfoot',
            abilityIncrease: {
              'CH': 2
            },
            feats: [
              'lightfoot stealth'
            ]
          },
          {
            id: 2,
            hame: 'stout',
            abilityIncrease: {
              'CN': 1
            },
            feats: [
              'stout resilient'
            ]
          }
        ]
      },
      {
        id: 3,
        name: 'elf',
        abilityIncrease: {
          'DX': 2
        },
        size: 'm',
        speed: 30,
        feats: [
          'keen senses',
          'darkvision',
          'fey ancestry',
          'trance',
          'elf weapon training'
        ],
        subraces: [
          {
            id: 1,
            name: 'high elf',
            abilityIncrease: {
              'IN': 1
            },
            feats: [
              'catrip',
              'extra language'
            ]
          },
          {
            id: 2,
            name: 'wood elf',
            abilityIncrease: {
              'WS': 1
            },
            feats: [
              'fleet of foot',
              'mark of the wild'
            ]
          }
        ]
      },
      {
        id: 4,
        name: 'dwarf',
        abilityIncrease: {
          'CN': 2
        },
        size: 'm',
        speed: 25,
        feats: [
          'darkvision',
          'dwarven resilience',
          'dwarven combat training',
          'tool proficiency',
          'stonecutting'
        ],
        subraces: [
          {
            id: 1,
            name: 'hill dwarf',
            abilityIncrease: {
              'WS': 1
            },
            feats: [
              'dwarven toughness'
            ]
          },
          {
            id: 2,
            name: 'mounttain dwarf',
            abilityIncrease: {
              'ST': 1
            },
            feats: [
              'dwarven armor training'
            ]
          }
        ]
      }
    ]
  }
}

if (LocalStorage.has('profile')) {
  state = LocalStorage.get.item('profile')
}

export default state
