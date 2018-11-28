import { LocalStorage } from 'quasar'
let state = {
  adding: false,
  equipped: [],
  options: [
    {
      id: 1,
      name: 'Abacus',
      category: '',
      cost: [2, 'gp'],
      weight: [2, 'lb.'],
      quantity: 1
    },
    {
      id: 2,
      name: 'Acid (vial)',
      category: '',
      cost: [25, 'gp'],
      weight: [1, 'lb.'],
      quantity: 1
    },
    {
      id: 3,
      name: 'Arrows',
      category: 'Ammunition',
      cost: [50, 'gp'],
      weight: [1, 'lb.'],
      quantity: 20
    },
    {
      id: 4,
      name: 'Blowgun needles',
      category: 'Ammunition',
      cost: [1, 'gp'],
      weight: [1, 'lb.'],
      quantity: 50
    },
    {
      id: 5,
      name: 'Crossbow bolts',
      category: 'Ammunition',
      cost: [1, 'gp'],
      weight: [1.5, 'lb.'],
      quantity: 20
    },
    {
      id: 6,
      name: 'Sling bullets',
      category: 'Ammunition',
      cost: [4, 'cp'],
      weight: [1.5, 'lb.'],
      quantity: 20
    },
    {
      id: 7,
      name: 'Antitoxin',
      category: '',
      cost: [50, 'gp'],
      weight: [1, 'lb.'],
      quantity: 1
    },
    {
      id: 8,
      name: 'Crystal',
      category: 'Arcane Focus',
      cost: [10, 'gp'],
      weight: [3, 'lb.'],
      quantity: 1
    },
    {
      id: 9,
      name: 'Orb',
      category: 'Arcane Focus',
      cost: [20, 'gp'],
      weight: [2, 'lb.'],
      quantity: 1
    },
    {
      id: 10,
      name: 'Rod',
      category: 'Arcane Focus',
      cost: [10, 'gp'],
      weight: [4, 'lb.'],
      quantity: 1
    },
    {
      id: 11,
      name: 'Staff',
      category: 'Arcane Focus',
      cost: [15, 'gp'],
      weight: [1, 'lb.'],
      quantity: 1
    },
    {
      id: 12,
      name: 'Wand',
      category: 'Arcane Focus',
      cost: [10, 'gp'],
      weight: [5, 'lb.'],
      quantity: 1
    },
    {
      id: 13,
      name: 'Backpack',
      category: '',
      cost: [2, 'gp'],
      weight: [2, 'lb.'],
      quantity: 1
    },
    {
      id: 14,
      name: 'Ball bearings',
      category: '',
      cost: [1, 'gp'],
      weight: [2, 'lb.'],
      quantity: 1000
    },
    {
      id: 15,
      name: 'Barrel',
      category: '',
      cost: [12, 'gp'],
      weight: [70, 'lb.'],
      quantity: 1
    },
    {
      id: 16,
      name: 'Basket',
      category: '',
      cost: [4, 'sp'],
      weight: [2, 'lb.'],
      quantity: 1
    },
    {
      id: 17,
      name: 'Bedroll',
      category: '',
      cost: [1, 'gp'],
      weight: [7, 'lb.'],
      quantity: 1
    },
    {
      id: 18,
      name: 'Bell',
      category: '',
      cost: [1, 'gp'],
      weight: [3, 'lb.'],
      quantity: 1
    },
    {
      id: 19,
      name: 'Blanket',
      category: '',
      cost: [5, 'sp'],
      weight: [5, 'lb.'],
      quantity: 1
    },
    {
      id: 20,
      name: 'Block and tackle',
      category: '',
      cost: [1, 'gp'],
      weight: [5, 'lb.'],
      quantity: 1
    },
    {
      id: 21,
      name: 'Book',
      category: '',
      cost: [25, 'gp'],
      weight: [2, 'lb.'],
      quantity: 1
    },
    {
      id: 22,
      name: 'Bottle, glass',
      category: '',
      cost: [2, 'gp'],
      weight: [2, 'lb.'],
      quantity: 1
    },
    {
      id: 23,
      name: 'Bucket',
      category: '',
      cost: [5, 'cp'],
      weight: [2, 'lb.'],
      quantity: 1
    },
    {
      id: 24,
      name: 'Caltrops',
      category: '',
      cost: [1, 'gp'],
      weight: [1, 'lb.'],
      quantity: 20
    },
    {
      id: 25,
      name: 'Candle',
      category: '',
      cost: [1, 'cp'],
      weight: [0.5, 'oz.'],
      quantity: 1
    },
    {
      id: 26,
      name: 'Case, crossbow Bolt',
      category: '',
      cost: [1, 'gp'],
      weight: [1, 'lb.'],
      quantity: 1
    },
    {
      id: 27,
      name: 'Case, map or scroll',
      category: '',
      cost: [1, 'gp'],
      weight: [1, 'lb.'],
      quantity: 1
    },
    {
      id: 28,
      name: 'Chain (10 feet)',
      category: '',
      cost: [5, 'gp'],
      weight: [10, 'lb.'],
      quantity: 1
    },
    {
      id: 29,
      name: 'Chalk (1 piece)',
      category: '',
      cost: [1, 'cp'],
      weight: [0.1, 'oz.'],
      quantity: 1
    },
    {
      id: 30,
      name: 'Chest',
      category: '',
      cost: [5, 'gp'],
      weight: [25, 'lb.'],
      quantity: 1
    },
    {
      id: 31,
      name: 'Climber\'s kit',
      category: '',
      cost: [25, 'gp'],
      weight: [12, 'lb.'],
      quantity: 1
    },
    {
      id: 32,
      name: 'Clothes, common',
      category: '',
      cost: [5, 'sp'],
      weight: [3, 'lb.'],
      quantity: 1
    },
    {
      id: 33,
      name: 'Clothes, costume',
      category: '',
      cost: [5, 'gp'],
      weight: [4, 'lb.'],
      quantity: 1
    },
    {
      id: 34,
      name: 'Clothes, fine',
      category: '',
      cost: [15, 'gp'],
      weight: [6, 'lb.'],
      quantity: 1
    },
    {
      id: 35,
      name: 'Clothes, traveler\'s',
      category: '',
      cost: [2, 'gp'],
      weight: [4, 'lb.'],
      quantity: 1
    },
    {
      id: 36,
      name: 'Component pouch',
      category: '',
      cost: [25, 'gp'],
      weight: [2, 'lb.'],
      quantity: 1
    },
    {
      id: 37,
      name: 'Crowbar',
      category: '',
      cost: [2, 'gp'],
      weight: [5, 'lb.'],
      quantity: 1
    },
    {
      id: 38,
      name: 'Druidic focus, Sprig of mistletoe',
      category: '',
      cost: [1, 'gp'],
      weight: [0, 'lb.'],
      quantity: 1
    },
    {
      id: 39,
      name: 'Druidic focus, Totem',
      category: '',
      cost: [1, 'gp'],
      weight: [1, 'oz.'],
      quantity: 1
    },
    {
      id: 40,
      name: 'Druidic focus, Wooden Staff',
      category: '',
      cost: [5, 'gp'],
      weight: [4, 'lb.'],
      quantity: 1
    },
    {
      id: 41,
      name: 'Druidic focus, Yew Wand',
      category: '',
      cost: [10, 'gp'],
      weight: [1, 'lb.'],
      quantity: 1
    },
    {
      id: 42,
      name: 'Fishing tackle',
      category: '',
      cost: [1, 'gp'],
      weight: [4, 'lb.'],
      quantity: 1
    },
    {
      id: 43,
      name: 'Flask or tankard',
      category: '',
      cost: [2, 'cp'],
      weight: [1, 'lb.'],
      quantity: 1
    },
    {
      id: 44,
      name: 'Grappling hook',
      category: '',
      cost: [2, 'gp'],
      weight: [4, 'lb.'],
      quantity: 1
    },
    {
      id: 45,
      name: 'Hammer',
      category: '',
      cost: [1, 'gp'],
      weight: [3, 'lb.'],
      quantity: 1
    },
    {
      id: 46,
      name: 'Hammer, sledge',
      category: '',
      cost: [2, 'gp'],
      weight: [10, 'lb.'],
      quantity: 1
    },
    {
      id: 47,
      name: 'Healer\'s kit',
      category: '',
      cost: [5, 'gp'],
      weight: [3, 'lb.'],
      quantity: 1
    },
    {
      id: 48,
      name: 'Holy symbol, Amulet',
      category: '',
      cost: [5, 'gp'],
      weight: [1, 'lb.'],
      quantity: 1
    },
    {
      id: 49,
      name: 'Holy symbol, Emblem',
      category: '',
      cost: [5, 'gp'],
      weight: [0, 'lb.'],
      quantity: 1
    },
    {
      id: 50,
      name: 'Holy symbol, Reliquary',
      category: '',
      cost: [5, 'gp'],
      weight: [2, 'lb.'],
      quantity: 1
    },
    {
      id: 51,
      name: 'Holy water (flask)',
      category: '',
      cost: [25, 'gp'],
      weight: [1, 'lb.'],
      quantity: 1
    },
    {
      id: 52,
      name: 'Hourglass',
      category: '',
      cost: [25, 'gp'],
      weight: [1, 'lb.'],
      quantity: 1
    },
    {
      id: 53,
      name: 'Hunting trap',
      category: '',
      cost: [5, 'gp'],
      weight: [25, 'lb.'],
      quantity: 1
    },
    {
      id: 54,
      name: 'Ink (1 ounce bottle)',
      category: '',
      cost: [10, 'gp'],
      weight: [1, 'oz.'],
      quantity: 1
    },
    {
      id: 55,
      name: 'Ink pen',
      category: '',
      cost: [2, 'cp'],
      weight: [0.1, 'oz.'],
      quantity: 1
    },
    {
      id: 56,
      name: 'Jug or pitcher',
      category: '',
      cost: [2, 'cp'],
      weight: [4, 'lb.'],
      quantity: 1
    },
    {
      id: 57,
      name: 'Ladder (10-foot)',
      category: '',
      cost: [1, 'sp'],
      weight: [25, 'lb.'],
      quantity: 1
    },
    {
      id: 58,
      name: 'Lamp',
      category: '',
      cost: [2, 'sp'],
      weight: [1, 'lb.'],
      quantity: 1
    },
    {
      id: 59,
      name: 'Lantern, bullseye',
      category: '',
      cost: [10, 'gp'],
      weight: [2, 'lb.'],
      quantity: 1
    },
    {
      id: 60,
      name: 'Lantern, hooded',
      category: '',
      cost: [5, 'gp'],
      weight: [2, 'lb.'],
      quantity: 1
    },
    {
      id: 61,
      name: 'Lock',
      category: '',
      cost: [10, 'gp'],
      weight: [1, 'lb.'],
      quantity: 1
    },
    {
      id: 62,
      name: 'Magnifying glass',
      category: '',
      cost: [100, 'gp'],
      weight: [1, 'oz.'],
      quantity: 1
    },
    {
      id: 63,
      name: 'Manacles',
      category: '',
      cost: [2, 'gp'],
      weight: [6, 'lb.'],
      quantity: 1
    },
    {
      id: 64,
      name: 'Mess kit',
      category: '',
      cost: [2, 'sp'],
      weight: [1, 'lb.'],
      quantity: 1
    },
    {
      id: 65,
      name: 'Mirror, steel',
      category: '',
      cost: [5, 'gp'],
      weight: [8, 'oz.'],
      quantity: 1
    },
    {
      id: 66,
      name: 'Oil (flask)',
      category: '',
      cost: [1, 'sp'],
      weight: [1, 'lb.'],
      quantity: 1
    },
    {
      id: 67,
      name: 'Paper (one sheet)',
      category: '',
      cost: [2, 'sp'],
      weight: [0.1, 'oz.'],
      quantity: 1
    },
    {
      id: 68,
      name: 'Parchment (one sheet)',
      category: '',
      cost: [1, 'sp'],
      weight: [0.2, 'oz.'],
      quantity: 1
    },
    {
      id: 69,
      name: 'Perfume (vial)',
      category: '',
      cost: [5, 'gp'],
      weight: [1, 'oz.'],
      quantity: 1
    },
    {
      id: 70,
      name: 'Pick, miner\'s',
      category: '',
      cost: [2, 'gp'],
      weight: [10, 'lb.'],
      quantity: 1
    },
    {
      id: 71,
      name: 'Piton',
      category: '',
      cost: [5, 'cp'],
      weight: [4, 'oz.'],
      quantity: 1
    },
    {
      id: 72,
      name: 'Poison, basic (vial)',
      category: '',
      cost: [100, 'gp'],
      weight: [1, 'oz.'],
      quantity: 1
    },
    {
      id: 73,
      name: 'Pole (10-foot)',
      category: '',
      cost: [5, 'cp'],
      weight: [7, 'lb.'],
      quantity: 1
    },
    {
      id: 74,
      name: 'Pot, iron',
      category: '',
      cost: [2, 'gp'],
      weight: [10, 'lb.'],
      quantity: 1
    },
    {
      id: 75,
      name: 'Potion of healing',
      category: '',
      cost: [50, 'gp'],
      weight: [8, 'oz.'],
      quantity: 1
    },
    {
      id: 76,
      name: 'Pouch',
      category: '',
      cost: [5, 'sp'],
      weight: [1, 'lb.'],
      quantity: 1
    },
    {
      id: 77,
      name: 'Quiver',
      category: '',
      cost: [1, 'gp'],
      weight: [1, 'lb.'],
      quantity: 1
    },
    {
      id: 78,
      name: 'Ram, portable',
      category: '',
      cost: [4, 'gp'],
      weight: [35, 'lb.'],
      quantity: 1
    },
    {
      id: 79,
      name: 'Rations (1 day)',
      category: '',
      cost: [5, 'sp'],
      weight: [2, 'lb.'],
      quantity: 1
    },
    {
      id: 80,
      name: 'Robes',
      category: '',
      cost: [1, 'gp'],
      weight: [4, 'lb.'],
      quantity: 1
    },
    {
      id: 81,
      name: 'Rope, hempen (50 feet)',
      category: '',
      cost: [1, 'gp'],
      weight: [10, 'lb.'],
      quantity: 1
    },
    {
      id: 82,
      name: 'Sack',
      category: '',
      cost: [1, 'cp'],
      weight: [8, 'oz.'],
      quantity: 1
    },
    {
      id: 83,
      name: 'Scale, merchant\'s',
      category: '',
      cost: [5, 'gp'],
      weight: [3, 'lb.'],
      quantity: 1
    },
    {
      id: 84,
      name: 'Sealing wax',
      category: '',
      cost: [5, 'cp'],
      weight: [1, 'oz.'],
      quantity: 1
    },
    {
      id: 85,
      name: 'Shovel',
      category: '',
      cost: [2, 'gp'],
      weight: [5, 'lb.'],
      quantity: 1
    },
    {
      id: 86,
      name: 'Signal whistle',
      category: '',
      cost: [5, 'cp'],
      weight: [0.2, 'oz.'],
      quantity: 1
    },
    {
      id: 87,
      name: 'Signet ring',
      category: '',
      cost: [5, 'gp'],
      weight: [0.5, 'oz.'],
      quantity: 1
    },
    {
      id: 88,
      name: 'Soap',
      category: '',
      cost: [2, 'cp'],
      weight: [1, 'oz.'],
      quantity: 1
    },
    {
      id: 89,
      name: 'Spellbook',
      category: '',
      cost: [50, 'gp'],
      weight: [3, 'lb.'],
      quantity: 1
    },
    {
      id: 90,
      name: 'Spikes, iron',
      category: '',
      cost: [1, 'gp'],
      weight: [5, 'lb.'],
      quantity: 10
    },
    {
      id: 91,
      name: 'Spyglass',
      category: '',
      cost: [1000, 'gp'],
      weight: [1, 'lb.'],
      quantity: 1
    },
    {
      id: 92,
      name: 'Tent, two-person',
      category: '',
      cost: [2, 'gp'],
      weight: [20, 'lb.'],
      quantity: 1
    },
    {
      id: 93,
      name: 'Tinderbox',
      category: '',
      cost: [5, 'sp'],
      weight: [1, 'lb.'],
      quantity: 1
    },
    {
      id: 94,
      name: 'Torch',
      category: '',
      cost: [1, 'cp'],
      weight: [1, 'lb.'],
      quantity: 1
    },
    {
      id: 95,
      name: 'Vial',
      category: '',
      cost: [1, 'gp'],
      weight: [0.1, 'oz.'],
      quantity: 1
    },
    {
      id: 96,
      name: 'Waterskin',
      category: '',
      cost: [2, 'sp'],
      weight: [5, 'lb.'],
      quantity: 1
    },
    {
      id: 97,
      name: 'Whetstone',
      category: '',
      cost: [1, 'cp'],
      weight: [1, 'lb.'],
      quantity: 1
    }
  ]
}

if (LocalStorage.has('item')) {
  state = LocalStorage.get.item('item')
}

export default state
