import styled from '@emotion/styled'
import { ReactNode, useState } from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'

interface StackProps {
  Top: ReactNode
  Ground: ReactNode
  openable: boolean
}

const Stack = ({ Top, Ground, openable }: StackProps) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Container>
      <StackTop open={open}>{Top}</StackTop>
      <StackGround>{Ground}</StackGround>
      {openable ? (
        <Arrow
          open={open}
          onClick={() => {
            setOpen(!open)
          }}
        >
          <BiDotsVerticalRounded size={'1.75rem'} color={'white'} />
        </Arrow>
      ) : (
        <SideBar>✔️</SideBar>
      )}
    </Container>
  )
}

export default Stack

const Arrow = styled.div(
  ({ open }: { open: boolean }) => `
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  bottom : 0;
  margin: auto;
  right: 0;
  transform: rotate(${open ? '-180deg' : '0'});
  transition: all ease 0.5s;
  `
)

const SideBar = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 6px;
`

const Container = styled.div`
  position: relative;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 15px 0px;
  border-radius: 1rem;
`

const StackTop = styled.div(
  ({ open }: { open: boolean }) => `
    position: absolute;
    width: 100%;
    height: 140px;
    transition: all ease 0.5s;
    transform: translate3d(${open ? '-80%' : '0'}, 0px, 0);
  `
)
const StackGround = styled.div`
  z-index: -2;
  width: 100%;
  height: 140px;
`
