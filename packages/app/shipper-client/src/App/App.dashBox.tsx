import styled from '@emotion/styled'
import { ComponentContainer, Spacer, Text, Title } from '@common/ssung-ui'

const DashBox = () => {
  return (
    <ComponentContainer>
      <Container>
        <Title>Enter</Title>
        <Spacer height="1rem" />
        <DashInfo></DashInfo>
      </Container>
    </ComponentContainer>
  )
}

export default DashBox

const Container = styled.div`
  background-color: var(--primary);
  border-radius: 1rem;
  padding: 1rem;
`

const DashInfo = styled.div`
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  min-height: 3rem;
`
