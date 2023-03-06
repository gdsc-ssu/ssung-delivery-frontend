import type { CardAction, CardType } from './CSContext'

const reducer = (state: CardType, action: CardAction): CardType => {
  switch (action.type) {
    case 'SET_NOW_CARD':
      return {
        nowCardIdx: action.nowCardIdx,
      }
    default:
      throw new Error('Unhandled action')
  }
}

export default reducer
