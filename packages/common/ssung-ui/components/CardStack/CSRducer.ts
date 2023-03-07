import type { CardAction, CardType } from './CSContext'

const reducer = (state: CardType, action: CardAction): CardType => {
  switch (action.type) {
    case 'CS_DOM':
      return {
        dom: action.dom,
      }
    default:
      throw new Error('Unhandled action')
  }
}

export default reducer
