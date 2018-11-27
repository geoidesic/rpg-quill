import { LocalStorage } from 'quasar'
let state = {
  adding: false,
  equipped: [],
  options: [
    {
      id: 1,
      name: 'Abacus',
      cost: [2, 'gp'],
      weight: [2, 'lb.']
    },
    {
      id: 1,
      name: 'Acid (vial)',
      cost: [25, 'gp'],
      weight: [1, 'lb.']
    },
    {
      id: 1,
      name: 'Ammunition, Arrows (20)',
      cost: [50, 'gp'],
      weight: [1, 'lb.']
    },
    {
      name: 'Ammunition, Arrows (20)',
      cost: [1, 'gp'],
      weight: [1, 'lb.']
    },
    {
      id: 1,
      name: 'Ammunition, Blowgun needles (50) ',
      cost: [1, 'gp'],
      weight: [1, 'lb.']
    },
    {
      id: 1,
      name: 'Ammunition, Crossbow bolts (20) ',
      cost: [1, 'gp'],
      weight: [1.5, 'lb.']
    },
    {
      id: 1,
      name: 'Ammunition, Sling bullets (20) ',
      cost: [4, 'cp'],
      weight: [1.5, 'lb.']
    },
    {
      id: 1,
      name: 'Antitoxin',
      cost: [50, 'gp'],
      weight: [1, 'lb.']
    },
    {
      id: 1,
      name: 'Arcane focus, Crystal',
      cost: [10, 'gp'],
      weight: [3, 'lb.']
    },
    {
      id: 1,
      name: 'Arcane focus, Orb ',
      cost: [20, 'gp'],
      weight: [2, 'lb.']
    },
    {
      id: 1,
      name: 'Arcane focus, Rod',
      cost: [10, 'gp'],
      weight: [4, 'lb.']
    },
    {
      id: 1,
      name: 'Arcane focus, Staff',
      cost: [15, 'gp'],
      weight: [1, 'lb.']
    },
    {
      id: 1,
      name: 'Arcane focus, Wand',
      cost: [10, 'gp'],
      weight: [5, 'lb.']
    },
    {
      id: 1,
      name: 'Backpack',
      cost: [2, 'gp'],
      weight: [2, 'lb.']
    },
    {
      id: 1,
      name: 'Ball bearings (bag of 1000)',
      cost: [1, 'gp'],
      weight: [2, 'lb.']
    },
    {
      id: 1,
      name: 'Barrel',
      cost: [12, 'gp'],
      weight: [70, 'lb.']
    },
    {
      id: 1,
      name: 'Basket',
      cost: [4, 'sp'],
      weight: [2, 'lb.']
    },
    {
      id: 1,
      name: 'Bedroll',
      cost: [1, 'gp'],
      weight: [7, 'lb.']
    },
    {
      id: 1,
      name: 'Bell',
      cost: [1, 'gp'],
      weight: [3, 'lb.']
    },
    {
      id: 1,
      name: 'Blanket',
      cost: [5, 'sp'],
      weight: [5, 'lb.']
    },
    {
      id: 1,
      name: 'Block and tackle',
      cost: [1, 'gp'],
      weight: [5, 'lb.']
    },
    {
      id: 1,
      name: 'Book',
      cost: [25, 'gp'],
      weight: [2, 'lb.']
    },
    {
      id: 1,
      name: 'Bottle, glass',
      cost: [2, 'gp'],
      weight: [2, 'lb.']
    },
    {
      id: 1,
      name: 'Bucket',
      cost: [5, 'cp'],
      weight: [2, 'lb.']
    },
    {
      id: 1,
      name: 'Caltrops (bag of 20)',
      cost: [1, 'gp'],
      weight: [1, 'lb.']
    },
    {
      id: 1,
      name: 'Candle',
      cost: [1, 'cp'],
      weight: [0, 'lb.']
    },
    {
      id: 1,
      name: 'Case, crossbow Bolt',
      cost: [1, 'gp'],
      weight: [1, 'lb.']
    },
    {
      id: 1,
      name: 'Case, map or scroll',
      cost: [1, 'gp'],
      weight: [1, 'lb.']
    },
    {
      id: 1,
      name: 'Chain (10 feet)',
      cost: [5, 'gp'],
      weight: [10, 'lb.']
    },
    {
      id: 1,
      name: 'Chalk (1 piece)',
      cost: [1, 'cp'],
      weight: [0, 'lb.']
    },
    {
      id: 1,
      name: 'Chest',
      cost: [5, 'gp'],
      weight: [25, 'lb.']
    },
    {
      id: 1,
      name: 'Climber\'s kit',
      cost: [25, 'gp'],
      weight: [12, 'lb.']
    },
    {
      id: 1,
      name: 'Clothes, common',
      cost: [5, 'sp'],
      weight: [3, 'lb.']
    },
    {
      id: 1,
      name: 'Clothes, costume',
      cost: [5, 'gp'],
      weight: [4, 'lb.']
    },
    {
      id: 1,
      name: 'Clothes, fine',
      cost: [15, 'gp'],
      weight: [6, 'lb.']
    },
    {
      id: 1,
      name: 'Clothes, traveler\'s',
      cost: [2, 'gp'],
      weight: [4, 'lb.']
    },
    {
      id: 1,
      name: 'Component pouch',
      cost: [25, 'gp'],
      weight: [2, 'lb.']
    },
    {
      id: 1,
      name: 'Crowbar',
      cost: [2, 'gp'],
      weight: [5, 'lb.']
    },
    {
      id: 1,
      name: 'Druidic focus, Sprig of mistletoe',
      cost: [1, 'gp'],
      weight: [0, 'lb.']
    },
    {
      id: 1,
      name: 'Druidic focus, Totem',
      cost: [1, 'gp'],
      weight: [0, 'lb.']
    },
    {
      id: 1,
      name: 'Druidic focus, Wooden Staff',
      cost: [5, 'gp'],
      weight: [4, 'lb.']
    },
    {
      id: 1,
      name: 'Druidic focus, Yew Wand',
      cost: [10, 'gp'],
      weight: [1, 'lb.']
    },
    {
      id: 1,
      name: 'Fishing tackle',
      cost: [1, 'gp'],
      weight: [4, 'lb.']
    },
    {
      id: 1,
      name: 'Flask or tankard',
      cost: [2, 'cp'],
      weight: [1, 'lb.']
    },
    {
      id: 1,
      name: 'Grappling hook',
      cost: [2, 'gp'],
      weight: [4, 'lb.']
    },
    {
      id: 1,
      name: 'Hammer',
      cost: [1, 'gp'],
      weight: [3, 'lb.']
    },
    {
      id: 1,
      name: 'Hammer, sledge',
      cost: [2, 'gp'],
      weight: [10, 'lb.']
    },
    {
      id: 1,
      name: 'Healer\'s kit',
      cost: [5, 'gp'],
      weight: [3, 'lb.']
    },
    {
      id: 1,
      name: 'Holy symbol, Amulet',
      cost: [5, 'gp'],
      weight: [1, 'lb.']
    },
    {
      id: 1,
      name: 'Holy symbol, Emblem',
      cost: [5, 'gp'],
      weight: [0, 'lb.']
    },
    {
      id: 1,
      name: 'Holy symbol, Reliquary',
      cost: [5, 'gp'],
      weight: [2, 'lb.']
    },
    {
      id: 1,
      name: 'Holy water (flask)',
      cost: [25, 'gp'],
      weight: [1, 'lb.']
    },
    {
      id: 1,
      name: 'Hourglass',
      cost: [25, 'gp'],
      weight: [1, 'lb.']
    },
    {
      id: 1,
      name: 'Hunting trap',
      cost: [5, 'gp'],
      weight: [25, 'lb.']
    },
    {
      id: 1,
      name: 'Ink (1 ounce bottle)',
      cost: [10, 'gp'],
      weight: [0, 'lb.']
    },
    {
      id: 1,
      name: 'Ink pen ',
      cost: [2, 'cp'],
      weight: [0, 'lb.']
    },
    {
      id: 1,
      name: 'Jug or pitcher',
      cost: [2, 'cp'],
      weight: [4, 'lb.']
    },
    {
      id: 1,
      name: 'Ladder (10-foot)',
      cost: [1, 'sp'],
      weight: [25, 'lb.']
    },
    {
      id: 1,
      name: 'Lamp',
      cost: [2, 'sp'],
      weight: [1, 'lb.']
    },
    {
      id: 1,
      name: 'Lantern, bullseye',
      cost: [10, 'gp'],
      weight: [2, 'lb.']
    },
    {
      id: 1,
      name: 'Lantern, hooded',
      cost: [5, 'gp'],
      weight: [2, 'lb.']
    },
    {
      id: 1,
      name: 'Lock',
      cost: [10, 'gp'],
      weight: [1, 'lb.']
    },
    {
      id: 1,
      name: 'Magnifying glass',
      cost: [100, 'gp'],
      weight: [0, 'lb.']
    },
    {
      id: 1,
      name: 'Manacles',
      cost: [2, 'gp'],
      weight: [6, 'lb.']
    },
    {
      id: 1,
      name: 'Mess kit',
      cost: [2, 'sp'],
      weight: [1, 'lb.']
    },
    {
      id: 1,
      name: 'Mirror, steel',
      cost: [5, 'gp'],
      weight: [0.5, 'lb.']
    },
    {
      id: 1,
      name: 'Oil (flask)',
      cost: [1, 'sp'],
      weight: [1, 'lb.']
    },
    {
      id: 1,
      name: 'Paper (one sheet)',
      cost: [2, 'sp'],
      weight: [0, 'lb.']
    },
    {
      id: 1,
      name: 'Parchment (one sheet)',
      cost: [1, 'sp'],
      weight: [0, 'lb.']
    },
    {
      id: 1,
      name: 'Perfume (vial)',
      cost: [5, 'gp'],
      weight: [0, 'lb.']
    },
    {
      id: 1,
      name: 'Pick, miner\'s',
      cost: [2, 'gp'],
      weight: [10, 'lb.']
    },
    {
      id: 1,
      name: 'Piton',
      cost: [5, 'cp'],
      weight: [0.25, 'lb.']
    },
    {
      id: 1,
      name: 'Poison, basic (vial)',
      cost: [100, 'gp'],
      weight: [0, 'lb.']
    },
    {
      id: 1,
      name: 'Pole (10-foot)',
      cost: [5, 'cp'],
      weight: [7, 'lb.']
    },
    {
      id: 1,
      name: 'Pot, iron',
      cost: [2, 'gp'],
      weight: [10, 'lb.']
    },
    {
      id: 1,
      name: 'Potion of healing',
      cost: [50, 'gp'],
      weight: [0.5, 'lb.']
    },
    {
      id: 1,
      name: 'Pouch',
      cost: [5, 'sp'],
      weight: [1, 'lb.']
    },
    {
      id: 1,
      name: 'Quiver',
      cost: [1, 'gp'],
      weight: [1, 'lb.']
    },
    {
      id: 1,
      name: 'Ram, portable',
      cost: [4, 'gp'],
      weight: [35, 'lb.']
    },
    {
      id: 1,
      name: 'Rations (1 day)',
      cost: [5, 'sp'],
      weight: [2, 'lb.']
    },
    {
      id: 1,
      name: 'Robes',
      cost: [1, 'gp'],
      weight: [4, 'lb.']
    },
    {
      id: 1,
      name: 'Rope, hempen (50 feet)',
      cost: [1, 'gp'],
      weight: [10, 'lb.']
    },
    {
      id: 1,
      name: 'Sack',
      cost: [1, 'cp'],
      weight: [0.5, 'lb.']
    },
    {
      id: 1,
      name: 'Scale, merchant\'s',
      cost: [5, 'gp'],
      weight: [3, 'lb.']
    },
    {
      id: 1,
      name: 'Sealing wax',
      cost: [5, 'cp'],
      weight: [0, 'lb.']
    },
    {
      id: 1,
      name: 'Shovel',
      cost: [2, 'gp'],
      weight: [5, 'lb.']
    },
    {
      id: 1,
      name: 'Signal whistle',
      cost: [5, 'cp'],
      weight: [0, 'lb.']
    },
    {
      id: 1,
      name: 'Signet ring',
      cost: [5, 'gp'],
      weight: [0, 'lb.']
    },
    {
      id: 1,
      name: 'Soap',
      cost: [2, 'cp'],
      weight: [0, 'lb.']
    },
    {
      id: 1,
      name: 'Spellbook',
      cost: [50, 'gp'],
      weight: [3, 'lb.']
    },
    {
      id: 1,
      name: 'Spikes, iron (10) ',
      cost: [1, 'gp'],
      weight: [5, 'lb.']
    },
    {
      id: 1,
      name: 'Spyglass',
      cost: [1000, 'gp'],
      weight: [1, 'lb.']
    },
    {
      id: 1,
      name: 'Tent, two-person',
      cost: [2, 'gp'],
      weight: [20, 'lb.']
    },
    {
      id: 1,
      name: 'Tinderbox',
      cost: [5, 'sp'],
      weight: [1, 'lb.']
    },
    {
      id: 1,
      name: 'Torch',
      cost: [1, 'cp'],
      weight: [1, 'lb.']
    },
    {
      id: 1,
      name: 'Vial',
      cost: [1, 'gp'],
      weight: [0, 'lb.']
    },
    {
      id: 1,
      name: 'Waterskin',
      cost: [2, 'sp'],
      weight: [5, 'lb.']
    },
    {
      id: 1,
      name: 'Whetstone',
      cost: [1, 'cp'],
      weight: [1, 'lb.']
    }
  ]
}

if (LocalStorage.has('item')) {
  state = LocalStorage.get.item('item')
}

export default state
