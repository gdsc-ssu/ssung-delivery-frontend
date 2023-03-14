import styled from '@emotion/styled'
import { Flex, Text } from '@common/ssung-ui'
import WAREHOUSE_LOCATION from '../../model/location'

const ShippingBox = () => {
  return (
    <Container>
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
            <button>UPDATE</button>
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

const Container = styled.div`
  background-color: var(--negative);
  height: 100%;
  width: 100%;
  border-radius: 1rem;
`
