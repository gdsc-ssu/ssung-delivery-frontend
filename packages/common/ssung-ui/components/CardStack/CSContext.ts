import { createContext, Dispatch, ReactNode } from 'react'

export interface CardType {
  nowCardIdx: number
}

export type CardAction = { type: 'SET_NOW_CARD'; nowCardIdx: number }
export type Cardispatch = Dispatch<CardAction>

export const CardContext = createContext<CardType>({ nowCardIdx: 2 })
export const CardDispatchContext = createContext<Cardispatch>(() => {})
