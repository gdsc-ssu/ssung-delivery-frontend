import { createContext } from 'react'

export interface ModalStateType {
  Component: React.ReactNode
  props: any
}

export const ModalsStateContext = createContext<ModalStateType[]>([])

// modal을 열고 닫는 함수
export const ModalsDispatchContext = createContext({
  open: (props: ModalStateType) => {},
  close: (Component: React.ReactNode) => {},
})
