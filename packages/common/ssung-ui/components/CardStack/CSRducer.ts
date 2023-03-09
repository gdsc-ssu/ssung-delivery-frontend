import type { CardAction, CardType } from './CSContext'

const reducer = (state: CardType, action: CardAction): CardType => {
  switch (action.type) {
    case 'NOW_CARD_IDX':
      return {
        domIdx: action.domIdx,
      }
    default:
      throw new Error('Unhandled action')
  }
}

export default reducer
