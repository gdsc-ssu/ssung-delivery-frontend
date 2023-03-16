import { useState } from 'react'
import styled from '@emotion/styled'
import { ComponentContainer, Spacer, Text, Title } from '@common/ssung-ui'
import DashUpdater from '../components/DashUpdater'

const DashBox = () => {
  const [isUpdaterOpen, setIsUpdaterOpen] = useState<boolean>(false)
  return (
    <ComponentContainer>
      <Container>
        <Title>Enter</Title>
        <Spacer height="1rem" />
        <DashInfo open={isUpdaterOpen}>
          <CamCover
            open={isUpdaterOpen}
            onClick={() => setIsUpdaterOpen(!isUpdaterOpen)}
          >
            <Text color={'white'}>SSUNG 업데이트</Text>
          </CamCover>
          <DashUpdater />
        </DashInfo>
        <Controller
          onClick={() => setIsUpdaterOpen(!isUpdaterOpen)}
          open={isUpdaterOpen}
        >
          {' > '}
        </Controller>
      </Container>
    </ComponentContainer>
  )
}

export default DashBox

const Controller = styled.div(
  ({ open }: { open: boolean }) => `
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease 1s;
  color: ${open ? 'white' : 'var(--primary)'};
  visibility: ${open ? 'visible' : 'hidden'};
  transform: rotate(270deg);`
)

const CamCover = styled.div(
  ({ open }: { open: boolean }) => `
    z-index: 5;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all ease 1s;
    box-shadow: 2px 7px 15px 8px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${open ? '0' : '1'};
    backdrop-filter: ${open ? '' : 'blur(5px)'};
    visibility: ${open ? 'hidden' : 'visible'};
  `
)

const Container = styled.div`
  background-color: var(--primary);
  border-radius: 1rem;
  padding: 0.5rem;
`

const DashInfo = styled.div(
  ({ open }: { open: boolean }) => `
    background-color: white;
    border-radius: 1rem;
    min-height: 5rem;
    transition: all 1s ease;
    overflow: hidden;
    position: relative;
    height: ${open ? '500px' : '0'}
    `
)
