import { LocalStorage } from 'quasar'
let state = {
  adding: false,
  editing: false,
  equipped: [],
  options: [
    {
      id: 1,
      name: 'athletics',
      attribute: 'ST',
      description: 'Covers difficult situations you encounter while climbing, jumping, or swimming.'
    },
    {
      id: 2,
      name: 'acrobatics',
      attribute: 'DX',
      description: 'Covers your attempt to stay on your feet in a tricky situation, such as when you’re trying to run across a sheet of ice, balance on a tightrope, or stay upright on a rocking ship’s deck. The DM might also call for a Dexterity (Acrobatics) check to see if you can perform acrobatic stunts, including dives, rolls, somersaults, and flips.'
    },
    {
      id: 3,
      name: 'sleight of hand',
      attribute: 'DX',
      description: 'Whenever you attempt an act of legerdemain or manual trickery, such as planting something on someone else or concealing an object on your person.'
    },
    {
      id: 4,
      name: 'stealth',
      attribute: 'DX',
      description: 'When you attempt to conceal yourself from enemies, slink past guards, slip away without being noticed, or sneak up on someone without being seen or heard.'
    },
    {
      id: 5,
      name: 'arcana',
      attribute: 'IN',
      description: 'Measures your ability to recall lore about spells, magic items, eldritch symbols, magical traditions, the planes of exis- tence, and the inhabitants of those planes.'
    },
    {
      id: 6,
      name: 'history',
      attribute: 'IN',
      description: 'Measures your ability to recall lore about historical events, legendary people, ancient kingdoms, past disputes, re- cent wars, and lost civilizations'
    },
    {
      id: 7,
      name: 'investigation',
      attribute: 'IN',
      description: 'When you look around for clues and make deductions based on those clues, you make an Intelligence (Investigation) check. You might deduce the location of a hidden object, discern from the appearance of a wound what kind of weapon dealt it, or determine the weakest point in a tunnel that could cause it to collapse. Poring through ancient scrolls in search of a hidden fragment of knowledge too.'
    },
    {
      id: 8,
      name: 'nature',
      attribute: 'IN',
      description: 'Measures your ability to recall lore about terrain, plants and ani- mals, the weather, and natural cycles.'
    },
    {
      id: 9,
      name: 'religion',
      attribute: 'IN',
      description: 'Measures your ability to recall lore about deities, rites and prayers, religious hierarchies, holy symbols, and the practices of secret cults'
    },
    {
      id: 10,
      name: 'animal handling',
      attribute: 'WS',
      description: 'When there is any question whether you can calm down a domesticated animal or keep a mount under control under adverse conditions.'
    },
    {
      id: 11,
      name: 'insight',
      attribute: 'WS',
      description: 'Decides whether you can determine the true intentions of a creature, such as when searching out a lie or predicting someone’s next move. Doing so involves gleaning clues from body lan- guage, speech habits, and changes in mannerisms.'
    },
    {
      id: 12,
      name: 'medicine',
      attribute: 'WS',
      description: 'Lets you try to stabilize a dying companion or diagnose an illness.'
    },
    {
      id: 13,
      name: 'perception',
      attribute: 'WS',
      description: 'Lets you spot, hear, or otherwise detect the presence of something. It measures your general awareness of your surroundings and the keenness of your senses. For example, you might try to hear a conversation through a closed door, eavesdrop under an open window, or hear monsters moving stealthily in the forest. Or you might try to spot things that are obscured or easy to miss, whether they are orcs lying in ambush on a road, thugs hiding in the shadows of an alley, or candlelight under a closed secret door.'
    },
    {
      id: 14,
      name: 'survival',
      attribute: 'WS',
      description: 'Follow tracks, hunt wild game, guide your group through frozen wastelands, identify signs that owlbears live nearby, predict the weather, or avoid quick- sand and other natural hazards.'
    },
    {
      id: 15,
      name: 'deception',
      attribute: 'CH',
      description: 'Determines whether you can convincingly hide the truth, either verbally or through your actions. This deception can encompass everything from misleading others through ambiguity to telling outright lies. Typical situations in- clude trying to fast-talk a guard, con a merchant, earn money through gambling, pass yourself off in a disguise, dull someone’s suspicions with false assurances, or main- tain a straight face while telling a blatant lie.'
    },
    {
      id: 16,
      name: 'intimidation',
      attribute: 'CH',
      description: 'When you attempt to influence someone through overt threats, hostile actions, and physical violence'
    },
    {
      id: 17,
      name: 'performance',
      attribute: 'CH',
      description: 'Check determines how well you can delight an audience with music, dance, acting, storytelling, or some other form of entertainment.'
    },
    {
      id: 18,
      name: 'persuasion',
      attribute: 'CH',
      description: 'When you attempt to influence someone or a group of people with tact, social graces, or good nature, the DM might ask you to make a Charisma (Persuasion) check. Typically, you use persuasion when acting in good faith, to foster friendships, make cordial requests, or exhibit proper etiquette. Examples of per- suading others include convincing a chamberlain to let your party see the king, negotiating peace between war- ring tribes, or inspiring a crowd of townsfolk.'
    }
  ]
}

if (LocalStorage.has('proficiency')) {
  state = LocalStorage.get.item('proficiency')
}

export default state
