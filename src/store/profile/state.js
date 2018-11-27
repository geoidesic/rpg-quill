import { LocalStorage } from 'quasar'
let state = {
  name: 'Kieran Alamore',
  level: 5,
  class: 'wizard',
  race: 'human'
}

if (LocalStorage.has('profile')) {
  state = LocalStorage.get.item('profile')
}

export default state
