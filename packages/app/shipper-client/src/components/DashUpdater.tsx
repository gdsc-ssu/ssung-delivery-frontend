import styled from '@emotion/styled'
import { CameraOnly, Flex, Text, Title } from '@common/ssung-ui'

const DashUpdater = () => {
  return (
    <Container>
      <CamContainer>
        <CameraOnly />
      </CamContainer>

      <FormContainer>
        <Title>기분이 슝슝한 서울대</Title>
        <Text>배송상태</Text>
        <Text>위치</Text>
        <button>UPDATE</button>
      </FormContainer>
    </Container>
  )
}

export default DashUpdater

const FormContainer = styled(Flex)`
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;
`

const CamContainer = styled.div`
  width: 320px;
  height: 320px;
  position: relative;
  margin: 0 auto;
`

const Container = styled.div`
  background-color: white;
  padding: 0.25rem;
  border-radius: 0.5rem;
`
