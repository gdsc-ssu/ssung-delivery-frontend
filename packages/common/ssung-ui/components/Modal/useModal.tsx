import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import ReactDOM from 'react-dom'
import { Flex, Spacer } from '../Layout'

const useModal = () => {
  const [open, setOpen] = useState<boolean>(false)
  const bgRef = useRef<HTMLDivElement>(null)
  const rootRef = useRef<HTMLElement>(document.getElementById('root'))

  const getPortalElement = () => {
    const $portal = document.getElementById('portal')
    if ($portal) return $portal

    const portalDom = document.createElement('div')
    portalDom.id = 'portal'
    document.body.appendChild(portalDom)
    return portalDom
  }

  const onModalOpen = () => {
    rootRef.current!.style.overflow = 'hidden'
    setOpen(true)
  }
  const onModalClose = () => {
    rootRef.current!.style.overflow = 'unset'
    setOpen(false)
  }
  const onTouchBg = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === bgRef.current) {
      onModalClose()
    }
  }

  const Modal = (props: { children: React.ReactNode; title?: string }) =>
    ReactDOM.createPortal(
      open ? (
        <Container ref={bgRef} onClick={onTouchBg}>
          <Contents>
            <Header>
              <Side></Side>
              <Center>{props.title || ''}</Center>
              <Side onClick={onModalClose}>X</Side>
            </Header>
            <Spacer height="1rem" />
            {props.children}
          </Contents>
        </Container>
      ) : null,
      getPortalElement()!
    )

  return { onModalOpen, onModalClose, Modal }
}

export default useModal
const Side = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Center = styled.div`
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Header = styled(Flex)`
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
`

const Contents = styled.div`
  min-width: 300px;
  min-height: 300px;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 3px 3px 10px gray;
  padding: 0.5rem;
`

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease 1s;
`
