import { ComponentContainer, Flex, Spacer, Title } from '@common/ssung-ui'
import styled from '@emotion/styled'
import InfoCard from '../components/Shipping/InfoCard'
import GroundForm from '../components/Shipping/GroundForm'
import Stack from '../components/Shipping/Stack'
import { Text } from '@common/ssung-ui'
import { SHIP_MOCK_DATA } from '../model/ship.mock'
import { ShipData } from '../model/ship'

const ShippingList = () => {
  const updateState = (id: string, toState: string) => {
    alert()
  }

  const getFinalState = (ship: ShipData) => {
    const filteredDoneHistory = ship.history.filter((hist) => hist.done)
    return filteredDoneHistory[filteredDoneHistory.length - 1]
  }

  return (
    <ComponentContainer>
      <Flex justifyContent={'space-between'}>
        <Title>배송목록</Title>
        <Row>
          <Row>
            <Text>배송 중</Text>
            <ShippingIng type="primary">3</ShippingIng>
          </Row>
          <Row>
            <Text>배송완료</Text>
            <ShippingIng type="negative">24</ShippingIng>
          </Row>
        </Row>
      </Flex>
      <Spacer height="2rem" />

      {SHIP_MOCK_DATA.map((ship) => (
        <>
          <Stack
            Top={<InfoCard ship={ship} />}
            Ground={
              <GroundForm
                id={ship.id}
                state={getFinalState(ship).state}
                updateState={updateState}
              />
            }
          />
          <Spacer height="1rem" />
        </>
      ))}
    </ComponentContainer>
  )
}

export default ShippingList

const ShippingIng = styled(Text)(
  ({ type }: { type: 'primary' | 'negative' }) => [
    `color: white; background-color: var(--${type}); padding: 0.25rem; border-radius: 1rem;`,
  ]
)

const Row = styled(Flex)`
  align-items: center;
  gap: 0.5rem;
`
