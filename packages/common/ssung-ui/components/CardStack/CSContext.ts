import { createContext, Dispatch, ReactNode } from 'react'

export interface CardType {
  domIdx: number
}

export type CardAction = { type: 'NOW_CARD_IDX'; domIdx: number }
export type Cardispatch = Dispatch<CardAction>

export const CardContext = createContext<CardType>({ domIdx: 2 })
export const CardDispatchContext = createContext<Cardispatch>(() => {})
