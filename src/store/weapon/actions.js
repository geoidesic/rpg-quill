import { LocalStorage } from 'quasar'
export const ASSIGN = (store, obj) => {
  LocalStorage.set('weapon', store.state)
}
