import { useContext } from 'react'
import { ModalsDispatchContext } from './ModalContext'

export default function useModals() {
  const { open, close } = useContext(ModalsDispatchContext)

  const openModal = (Component: React.ReactNode, props: any) => {
    open({ Component, props })
  }
  const closeModal = (Component: React.ReactNode) => {
    close(Component)
  }
  return { openModal, closeModal }
}
