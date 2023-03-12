import styled from '@emotion/styled'
import { useContext } from 'react'
import { ModalsDispatchContext, ModalsStateContext } from './ModalContext'

const Modals = () => {
  const openedModals = useContext(ModalsStateContext)
  const { close } = useContext(ModalsDispatchContext)

  return openedModals.map((modal, index) => {
    const { Component, props } = modal
    const { onSubmit, ...restProps } = props

    const onClose = () => {
      close(Component)
    }

    return <ModalComponent key={index} onClose={onClose} {...restProps} />
  })
}

export default Modals

const ModalComponent = styled.div``
