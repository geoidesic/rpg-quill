import { LocalStorage } from 'quasar'
let state = {
  adding: false,
  equipped: [],
  options: [
    {
      id: 1,
      name: 'Guidance',
      class: 'cleric',
      school: 'conjuration',
      level: 0,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 2,
      name: 'Light',
      class: 'cleric',
      school: 'conjuration',
      level: 0,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 3,
      name: 'Resistance',
      class: 'cleric',
      school: 'conjuration',
      level: 0,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 4,
      name: 'Sacred Flame',
      class: 'cleric',
      school: 'conjuration',
      level: 0,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 5,
      name: 'Spare the Dying',
      class: 'cleric',
      school: 'conjuration',
      level: 0,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 6,
      name: 'Thaumaturgy',
      class: 'cleric',
      school: 'conjuration',
      level: 0,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 7,
      name: '1st Level',
      class: 'cleric',
      school: 'conjuration',
      level: 1,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 8,
      name: 'Bless',
      class: 'cleric',
      school: 'conjuration',
      level: 1,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 9,
      name: 'Command',
      class: 'cleric',
      school: 'conjuration',
      level: 1,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 10,
      name: 'Cure Wounds',
      class: 'cleric',
      school: 'conjuration',
      level: 1,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 11,
      name: 'Detect Magic',
      class: 'cleric',
      school: 'conjuration',
      level: 1,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 12,
      name: 'Guiding Bolt',
      class: 'cleric',
      school: 'conjuration',
      level: 1,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 13,
      name: 'Healing Word',
      class: 'cleric',
      school: 'conjuration',
      level: 1,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 14,
      name: 'Inflict Wounds',
      class: 'cleric',
      school: 'conjuration',
      level: 1,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 15,
      name: 'Sanctuary',
      class: 'cleric',
      school: 'conjuration',
      level: 1,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 16,
      name: 'Shield of Faith',
      class: 'cleric',
      school: 'conjuration',
      level: 1,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 17,
      name: 'Aid',
      class: 'cleric',
      school: 'abjuration',
      level: 2,
      dmg: {},
      aoe: 0,
      save: false,
      components: ['v', 's', 'm'],
      ttc: [1, 'action'],
      dur: [8, 'hours'],
      range: [30],
      material: ['tiny strip of white cloth'],
      description: 'Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target’s hit point maximum and current hit points increase by 5 for the duration. At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, a target’s hit points increase by an additional 5 for each slot level above 2nd.'
    },
    {
      id: 18,
      name: 'Augury',
      class: 'cleric',
      school: 'conjuration',
      level: 2,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 19,
      name: 'Hold Person',
      class: 'cleric',
      school: 'conjuration',
      level: 2,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 20,
      name: 'Lesser Restoration',
      class: 'cleric',
      school: 'conjuration',
      level: 2,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 21,
      name: 'Prayer of Healing',
      class: 'cleric',
      school: 'conjuration',
      level: 2,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 22,
      name: 'Silence',
      class: 'cleric',
      school: 'conjuration',
      level: 2,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 23,
      name: 'Spiritual Weapon',
      class: 'cleric',
      school: 'conjuration',
      level: 2,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 24,
      name: 'Warding Bond',
      class: 'cleric',
      school: 'conjuration',
      level: 2,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 25,
      name: 'Beacon of Hope',
      class: 'cleric',
      school: 'conjuration',
      level: 3,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 26,
      name: 'Dispel Magic',
      class: 'cleric',
      school: 'conjuration',
      level: 3,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 27,
      name: 'Mass',
      class: 'cleric',
      school: 'conjuration',
      level: 3,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 28,
      name: 'Healing Word',
      class: 'cleric',
      school: 'conjuration',
      level: 3,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 29,
      name: 'Protection from Energy',
      class: 'cleric',
      school: 'conjuration',
      level: 3,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 30,
      name: 'Remove Curse',
      class: 'cleric',
      school: 'conjuration',
      level: 3,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 31,
      name: 'Revivify',
      class: 'cleric',
      school: 'conjuration',
      level: 3,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 32,
      name: 'Speak with Dead',
      class: 'cleric',
      school: 'conjuration',
      level: 3,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 33,
      name: 'Spirit Guardians',
      class: 'cleric',
      school: 'conjuration',
      level: 3,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 34,
      name: 'Death Ward',
      class: 'cleric',
      school: 'conjuration',
      level: 4,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 35,
      name: 'Divination',
      class: 'cleric',
      school: 'conjuration',
      level: 4,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 36,
      name: 'Freedom of Movement',
      class: 'cleric',
      school: 'conjuration',
      level: 4,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 37,
      name: 'Guardian of Faith',
      class: 'cleric',
      school: 'conjuration',
      level: 4,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 38,
      name: 'Locate Creature',
      class: 'cleric',
      school: 'conjuration',
      level: 4,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 39,
      name: 'Commune',
      class: 'cleric',
      school: 'conjuration',
      level: 5,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 40,
      name: 'Flame Strike',
      class: 'cleric',
      school: 'conjuration',
      level: 5,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 41,
      name: 'Greater Restoration',
      class: 'cleric',
      school: 'conjuration',
      level: 5,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 42,
      name: 'Mass Cure Wounds',
      class: 'cleric',
      school: 'conjuration',
      level: 5,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 43,
      name: 'Raise Dead',
      class: 'cleric',
      school: 'conjuration',
      level: 5,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 44,
      name: 'Blade Barrier',
      class: 'cleric',
      school: 'conjuration',
      level: 6,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 45,
      name: 'Find the Path',
      class: 'cleric',
      school: 'conjuration',
      level: 6,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 46,
      name: 'Harm',
      class: 'cleric',
      school: 'conjuration',
      level: 6,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 47,
      name: 'Heal',
      class: 'cleric',
      school: 'conjuration',
      level: 6,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 48,
      name: 'Heroes’ Feast',
      class: 'cleric',
      school: 'conjuration',
      level: 6,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 49,
      name: 'True Seeing',
      class: 'cleric',
      school: 'conjuration',
      level: 6,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 50,
      name: 'Etherealness',
      class: 'cleric',
      school: 'conjuration',
      level: 7,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 51,
      name: 'Fire Storm',
      class: 'cleric',
      school: 'conjuration',
      level: 7,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 52,
      name: 'Regenerate',
      class: 'cleric',
      school: 'conjuration',
      level: 7,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 53,
      name: 'Resurrection',
      class: 'cleric',
      school: 'conjuration',
      level: 7,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 54,
      name: 'Antimagic Field',
      class: 'cleric',
      school: 'abjuration',
      level: 8,
      dmg: {},
      aoe: [10, 'feet', 'sphere'],
      save: false,
      components: ['v', 's', 'm'],
      ttc: [1, 'action'],
      dur: ['concentraion', 1, 'hour'],
      range: ['self'],
      material: ['a pinch of powdered iron'],
      description: 'A 10-foot-radius invisible sphere of antimagic surrounds you. This area is divorced from the magical energy that suffuses the multiverse. Within the sphere, spells can’t be cast, summoned creatures disappear, and even magic items become mundane. Until the spell ends, the sphere moves with you, centered on you. Spells and other magical effects, except those created by an artifact or a deity, are suppressed in the sphere and can’t protrude into it. A slot expended to cast a suppressed spell is consumed. While an effect is suppressed, it doesn’t function, but the time it spends suppressed counts against its duration. Targeted Effects. Spells and other magical effects, such as magic missile and charm person, that target a creature or an object in the sphere have no effect on that target. Areas of Magic. The area of another spell or magical effect, such as fireball, can’t extend into the sphere. If the sphere overlaps an area of magic, the part of the area that is covered by the sphere is suppressed. For example, the flames created by a wall of fire are suppressed within the sphere, creating a gap in the wall if the overlap is large enough. Spells. Any active spell or other magical effect on a creature or an object in the sphere is suppressed while the creature or object is in it. Magic Items. The properties and powers of magic items are suppressed in the sphere. For example, a +1 longsword in the sphere functions as a nonmagical longsword. A magic weapon’s properties and powers are suppressed if it is used against a target in the sphere or wielded by an attacker in the sphere. If a magic weapon or a piece of magic ammunition fully leaves the sphere (for example, if you fire a magic arrow or throw a magic spear at a target outside the sphere), the magic of the item ceases to be suppressed as soon as it exits. Magical Travel. Teleportation and planar travel fail to work in the sphere, whether the sphere is the destination or the departure point for such magical travel. A portal to another location, world, or plane of existence, as well as an opening to an extradimensional space such as that created by the rope trick spell, temporarily closes while in the sphere. Creatures and Objects. A creature or object summoned or created by magic temporarily winks out of existence in the sphere. Such a creature instantly reappears once the space the creature occupied is no longer within the sphere. Dispel Magic. Spells and magical effects such as dispel magic have no effect on the sphere. Likewise, the spheres created by different antimagic field spells don’t nullify each other.'
    },
    {
      id: 55,
      name: 'Earthquake',
      class: 'cleric',
      school: 'conjuration',
      level: 8,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 56,
      name: 'Holy Aura',
      class: 'cleric',
      school: 'conjuration',
      level: 8,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 57,
      name: 'Astral Projection',
      class: 'cleric',
      school: 'conjuration',
      level: 9,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 58,
      name: 'Gate',
      class: 'cleric',
      school: 'conjuration',
      level: 9,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 59,
      name: 'Mass Heal',
      class: 'cleric',
      school: 'conjuration',
      level: 9,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 60,
      name: 'True Resurrection',
      class: 'cleric',
      school: 'conjuration',
      level: 9,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: ['instantaneous'],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 61,
      name: 'Acid Splash',
      class: 'wizard',
      school: 'conjuration',
      level: 0,
      dmg: {
        1: '1d6',
        5: '2d6',
        11: '3d6',
        17: '4d6'
      },
      aoe: 0,
      save: 'DX',
      components: ['v', 's'],
      ttc: [1, 'action'],
      dur: [0],
      range: [60],
      material: [],
      description: 'You hurl a bubble of acid. Choose one or two creatures you can see within range. If you choose two, they must be within 5 feet of each other.'
    },
    {
      id: 62,
      name: 'Dancing Lights',
      class: 'wizard',
      school: 'conjuration',
      level: 0,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 63,
      name: 'Fire Bolt',
      class: 'wizard',
      school: 'conjuration',
      level: 0,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 64,
      name: 'Light',
      class: 'wizard',
      school: 'conjuration',
      level: 0,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 65,
      name: 'Mage Hand',
      class: 'wizard',
      school: 'conjuration',
      level: 0,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 66,
      name: 'Minor Illusion',
      class: 'wizard',
      school: 'conjuration',
      level: 0,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 66,
      name: 'Poison Spray',
      class: 'wizard',
      school: 'conjuration',
      level: 0,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 67,
      name: 'Prestidigitation',
      class: 'wizard',
      school: 'conjuration',
      level: 0,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 68,
      name: 'Ray of Frost',
      class: 'wizard',
      school: 'conjuration',
      level: 0,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 69,
      name: 'Shocking Grasp',
      class: 'wizard',
      school: 'conjuration',
      level: 0,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 70,
      name: 'Burning Hands',
      class: 'wizard',
      school: 'conjuration',
      level: 1,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 71,
      name: 'Charm Person',
      class: 'wizard',
      school: 'conjuration',
      level: 1,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 72,
      name: 'Comprehend Languages',
      class: 'wizard',
      school: 'conjuration',
      level: 1,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 73,
      name: 'Detect Magic',
      class: 'wizard',
      school: 'conjuration',
      level: 1,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 74,
      name: 'Disguise Self',
      class: 'wizard',
      school: 'conjuration',
      level: 1,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 75,
      name: 'Identify',
      class: 'wizard',
      school: 'conjuration',
      level: 1,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 76,
      name: 'Mage Armor',
      class: 'wizard',
      school: 'conjuration',
      level: 1,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 77,
      name: 'Magic Missile',
      class: 'wizard',
      school: 'conjuration',
      level: 1,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 78,
      name: 'Shield',
      class: 'wizard',
      school: 'conjuration',
      level: 1,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 79,
      name: 'Silent Image',
      class: 'wizard',
      school: 'conjuration',
      level: 1,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 80,
      name: 'Sleep',
      class: 'wizard',
      school: 'conjuration',
      level: 1,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 81,
      name: 'Thunderwave',
      class: 'wizard',
      school: 'conjuration',
      level: 1,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 82,
      name: 'Arcane Lock Blur',
      class: 'wizard',
      school: 'conjuration',
      level: 2,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 83,
      name: 'Darkness',
      class: 'wizard',
      school: 'conjuration',
      level: 2,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 84,
      name: 'Flaming Sphere',
      class: 'wizard',
      school: 'conjuration',
      level: 2,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 85,
      name: 'Hold Person',
      class: 'wizard',
      school: 'conjuration',
      level: 2,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 86,
      name: 'Invisibility',
      class: 'wizard',
      school: 'conjuration',
      level: 2,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 87,
      name: 'Knock',
      class: 'wizard',
      school: 'conjuration',
      level: 2,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 88,
      name: 'Levitate',
      class: 'wizard',
      school: 'conjuration',
      level: 2,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 89,
      name: 'Magic Weapon',
      class: 'wizard',
      school: 'conjuration',
      level: 2,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 90,
      name: 'Misty Step',
      class: 'wizard',
      school: 'conjuration',
      level: 2,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 91,
      name: 'Shatter',
      class: 'wizard',
      school: 'conjuration',
      level: 2,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 92,
      name: 'Spider Climb',
      class: 'wizard',
      school: 'conjuration',
      level: 2,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 93,
      name: 'Suggestion',
      class: 'wizard',
      school: 'conjuration',
      level: 2,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 94,
      name: 'Web',
      class: 'wizard',
      school: 'conjuration',
      level: 2,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 95,
      name: 'Counterspell',
      class: 'wizard',
      school: 'conjuration',
      level: 3,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 96,
      name: 'Dispel Magic',
      class: 'wizard',
      school: 'conjuration',
      level: 3,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 97,
      name: 'Fireball',
      class: 'wizard',
      school: 'conjuration',
      level: 3,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 98,
      name: 'Fly',
      class: 'wizard',
      school: 'conjuration',
      level: 3,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 99,
      name: 'Haste',
      class: 'wizard',
      school: 'conjuration',
      level: 3,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 100,
      name: 'Lightning Bolt',
      class: 'wizard',
      school: 'conjuration',
      level: 3,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 101,
      name: 'Major Image',
      class: 'wizard',
      school: 'conjuration',
      level: 3,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 102,
      name: 'Protection from Energy',
      class: 'wizard',
      school: 'conjuration',
      level: 3,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 103,
      name: 'Arcane Eye',
      class: 'wizard',
      school: 'divination',
      level: 4,
      dmg: {},
      aoe: 0,
      save: false,
      components: ['v', 's', 'm'],
      ttc: [1, 'action'],
      dur: ['Concentration', 1, 'hour'],
      range: [30, 'feet'],
      material: ['a bit of bat fur'],
      description: 'You create an invisible, magical eye within range that hovers in the air for the duration. You mentally receive visual information from the eye, which has normal vision and darkvision out to 30 feet. The eye can look in every direction. As an action, you can move the eye up to 30 feet in any direction. There is no limit to how far away from you the eye can move, but it can’t enter another plane of existence. A solid barrier blocks the eye’s movement, but the eye can pass through an opening as small as 1 inch in diameter.'
    },
    {
      id: 104,
      name: 'Dimension Door',
      class: 'wizard',
      school: 'conjuration',
      level: 4,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 105,
      name: 'Greater Invisibility',
      class: 'wizard',
      school: 'conjuration',
      level: 4,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 106,
      name: 'Ice Storm',
      class: 'wizard',
      school: 'conjuration',
      level: 4,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 107,
      name: 'Stoneskin',
      class: 'wizard',
      school: 'conjuration',
      level: 4,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 108,
      name: 'Wall of Fire',
      class: 'wizard',
      school: 'conjuration',
      level: 4,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 109,
      name: 'Cone of Cold',
      class: 'wizard',
      school: 'conjuration',
      level: 5,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 110,
      name: 'Dominate',
      class: 'wizard',
      school: 'conjuration',
      level: 5,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 111,
      name: 'Person Dream',
      class: 'wizard',
      school: 'conjuration',
      level: 5,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 112,
      name: 'Passwall',
      class: 'wizard',
      school: 'conjuration',
      level: 5,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 113,
      name: 'Wall of Stone',
      class: 'wizard',
      school: 'conjuration',
      level: 5,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 114,
      name: 'Chain Lightning',
      class: 'wizard',
      school: 'conjuration',
      level: 6,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 115,
      name: 'Disintegrate',
      class: 'wizard',
      school: 'conjuration',
      level: 6,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 116,
      name: 'Globe of Invulnerability',
      class: 'wizard',
      school: 'conjuration',
      level: 6,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 117,
      name: 'Mass Suggestion',
      class: 'wizard',
      school: 'conjuration',
      level: 6,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 118,
      name: 'Otto’s Irresistible Dance',
      class: 'wizard',
      school: 'conjuration',
      level: 6,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 119,
      name: 'True Seeing',
      class: 'wizard',
      school: 'conjuration',
      level: 6,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 120,
      name: 'Delayed Blast Fireball',
      class: 'wizard',
      school: 'conjuration',
      level: 7,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 121,
      name: 'Finger of Death',
      class: 'wizard',
      school: 'conjuration',
      level: 7,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 122,
      name: 'Mordenkainen’s Sword',
      class: 'wizard',
      school: 'conjuration',
      level: 7,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 123,
      name: 'Teleport',
      class: 'wizard',
      school: 'conjuration',
      level: 7,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 124,
      name: 'Dominate',
      class: 'wizard',
      school: 'conjuration',
      level: 8,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 125,
      name: 'Monster Maze',
      class: 'wizard',
      school: 'conjuration',
      level: 8,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 126,
      name: 'Power Word Stun',
      class: 'wizard',
      school: 'conjuration',
      level: 8,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 127,
      name: 'Sunburst',
      class: 'wizard',
      school: 'conjuration',
      level: 8,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 128,
      name: 'Foresight',
      class: 'wizard',
      school: 'conjuration',
      level: 9,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 129,
      name: 'Imprisonment',
      class: 'wizard',
      school: 'conjuration',
      level: 9,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 130,
      name: 'Meteor Swarm',
      class: 'wizard',
      school: 'conjuration',
      level: 9,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 131,
      name: 'Power Word Kill',
      class: 'wizard',
      school: 'conjuration',
      level: 9,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    },
    {
      id: 132,
      name: 'Time Stop',
      class: 'wizard',
      school: 'conjuration',
      level: 9,
      dmg: {
        1: '1d6'
      },
      aoe: 0,
      save: false,
      components: ['v'],
      ttc: [1, 'action'],
      dur: [0],
      range: ['self'],
      material: [],
      description: ''
    }
  ]
}

if (LocalStorage.has('spell')) {
  state = LocalStorage.get.item('spell')
}

export default state
