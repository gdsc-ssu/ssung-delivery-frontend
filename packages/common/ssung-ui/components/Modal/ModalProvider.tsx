import { useState } from 'react'
import {
  ModalsStateContext,
  ModalsDispatchContext,
  ModalStateType,
} from './ModalContext'

const ModalsProvider = (props: { children: React.ReactNode }) => {
  const [openedModals, setOpenedModals] = useState<ModalStateType[]>([])

  const open = ({ Component, props }: ModalStateType) => {
    setOpenedModals((modals: ModalStateType[]) => {
      return [...modals, { Component, props }]
    })
  }
  const close = (Component: React.ReactNode) => {
    setOpenedModals((modals) => {
      return modals.filter((modal) => modal.Component !== Component)
    })
  }

  const dispatch = { open, close }

  return (
    <ModalsDispatchContext.Provider value={dispatch}>
      <ModalsStateContext.Provider value={openedModals}>
        {props.children}
      </ModalsStateContext.Provider>
    </ModalsDispatchContext.Provider>
  )
}

export default ModalsProvider
