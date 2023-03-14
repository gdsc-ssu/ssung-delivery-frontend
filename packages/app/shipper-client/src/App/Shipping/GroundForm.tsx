import styled from '@emotion/styled'
import { Flex, Text } from '@common/ssung-ui'
import WAREHOUSE_LOCATION from '../../model/location'

interface ShippingBoxType {
  id: string
  state: string
  updateState: (id: string, toState: string) => void
}

const ShippingBox = (props: ShippingBoxType) => {
  const updateState = () => {
    props.updateState(props.id, '')
  }

  return (
    <Container isFinish={props.state === '배송완료'}>
      <SafeArea>
        <FormConainer>
          <Row>
            <Text>배송상태</Text>
            <FormSelect>
              <option>수거 완료</option>
              <option>배송 중</option>
              <option>배송 완료</option>
            </FormSelect>
          </Row>

          <Row>
            <Text>물품위치</Text>
            <FormSelect>
              {WAREHOUSE_LOCATION.map((loc) => (
                <option>{loc.name}</option>
              ))}
            </FormSelect>
          </Row>

          <Row>
            <button onClick={updateState}>UPDATE</button>
          </Row>
        </FormConainer>
      </SafeArea>
    </Container>
  )
}

export default ShippingBox

const FormSelect = styled.select`
  min-width: 8rem;
`

const FormConainer = styled(Flex)`
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
`

const Row = styled(Flex)`
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`

const SafeArea = styled.div`
  height: 100%;
  margin-left: 20%;
  margin-right: 10%;
  border-radius: 1rem;
`

const Container = styled.div(
  ({ isFinish }: { isFinish: boolean }) => `
  background-color: ${isFinish ? 'var(--primary)' : 'var(--negative)'};
  height: 100%;
  width: 100%;
  border-radius: 1rem;
`
)
