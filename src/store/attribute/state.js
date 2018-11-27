import { LocalStorage } from 'quasar'
let state =
 [
   {
     id: 'ST',
     full: 10,
     buffs: [],
     buffTotal: 0,
     debuffs: [],
     debuffTotal: 0,
     modified: 10
   },
   {
     id: 'DX',
     full: 10,
     buffs: [],
     buffTotal: 0,
     debuffs: [],
     debuffTotal: 0,
     modified: 10
   },
   {
     id: 'CN',
     full: 10,
     buffs: [],
     buffTotal: 0,
     debuffs: [],
     debuffTotal: 0,
     modified: 10
   },
   {
     id: 'IN',
     full: 10,
     buffs: [],
     buffTotal: 0,
     debuffs: [],
     debuffTotal: 0,
     modified: 10
   },
   {
     id: 'WS',
     full: 10,
     buffs: [],
     buffTotal: 0,
     debuffs: [],
     debuffTotal: 0,
     modified: 10
   },
   {
     id: 'CH',
     full: 10,
     buffs: [],
     buffTotal: 0,
     debuffs: [],
     debuffTotal: 0,
     modified: 10
   },
   {
     id: 'HP',
     full: 10,
     buffs: [],
     buffTotal: 0,
     debuffs: [],
     debuffTotal: 0,
     modified: 10
   }
 ]
if (LocalStorage.has('attribute')) {
  state = LocalStorage.get.item('attribute')
}

export default state
