import { atom } from 'jotai'
import { ShipData } from '../model/ship'
import { SHIP_MOCK_DATA } from '../model/ship.mock'

const shipAtom = atom<ShipData[]>(SHIP_MOCK_DATA)

export { shipAtom }
