import { useState } from 'react'
import styled from '@emotion/styled'
import { ComponentContainer, Spacer, Text, Title } from '@common/ssung-ui'
import DashUpdater from '../components/DashUpdater'
import { IoIosArrowUp } from 'react-icons/io'

const DashBox = () => {
  const [isUpdaterOpen, setIsUpdaterOpen] = useState<boolean>(false)
  return (
    <ComponentContainer>
      <Container>
        <Spacer height="1rem" />
        <Title
          style={{ color: 'white', fontSize: '1.2rem', marginLeft: '1rem' }}
        >
          🚛 오늘 배송도 화이팅!
        </Title>
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
          <IoIosArrowUp />
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
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease 1s;
  height: ${open ? '2rem' : '0.25rem'};
  color: ${open ? 'white' : 'var(--primary)'};
  visibility: ${open ? 'visible' : 'hidden'};
  `
)

const CamCover = styled.div(
  ({ open }: { open: boolean }) => `
    z-index: 5;
    position: absolute;
    transition: all ease 1s;
    box-shadow: 2px 7px 15px 8px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${open ? '320px' : '100%'};
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
    height: ${open ? '525px' : '0'}
    `
)
