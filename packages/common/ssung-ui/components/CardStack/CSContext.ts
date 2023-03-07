import { createContext, Dispatch, ReactNode } from 'react'

export interface CardType {
  dom: HTMLDivElement | null
}

export type CardAction = { type: 'CS_DOM'; dom: HTMLDivElement }
export type Cardispatch = Dispatch<CardAction>

export const CardContext = createContext<CardType>({ dom: null })
export const CardDispatchContext = createContext<Cardispatch>(() => {})
