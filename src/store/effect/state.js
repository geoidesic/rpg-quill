import { LocalStorage } from 'quasar'
let state = {
  adding: false,
  editing: false,
  equipped: [],
  options: [
    {
      id: 1,
      name: 'asleep',
      description: 'zzzz...'
    },
    {
      id: 2,
      name: 'bleeding',
      description: 'Leaking blood'
    },
    {
      id: 3,
      name: 'charmed',
      description: 'Beguiled'
    },
    {
      id: 4,
      name: 'hasted',
      description: 'Like the hare.'
    },
    {
      id: 5,
      name: 'incorporeal',
      description: 'You can\'t touch this!'
    },
    {
      id: 6,
      name: 'invisible',
      description: 'Unseen.'
    },
    {
      id: 7,
      name: 'panicked',
      description: 'Fright, fight, flight or confusion'
    },
    {
      id: 8,
      name: 'poisoned',
      description: 'Afflicted by toxins'
    },
    {
      id: 9,
      name: 'prone',
      description: 'Fallen over. Lying down. Supine. Horizontal. Log-like'
    },
    {
      id: 10,
      name: 'slowed',
      description: 'Like the tortoise.'
    },
    {
      id: 11,
      name: 'stunned',
      description: 'WTF!?'
    }
  ]
}

if (LocalStorage.has('effect')) {
  state = LocalStorage.get.item('effect')
}

export default state
