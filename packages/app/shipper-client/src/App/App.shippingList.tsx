import { ComponentContainer, Flex, Spacer, Title } from '@common/ssung-ui'
import styled from '@emotion/styled'
import InfoCard from '../components/Shipping/InfoCard'
import GroundForm from '../components/Shipping/GroundForm'
import Stack from '../components/Shipping/Stack'
import { Text } from '@common/ssung-ui'
import { useAtom } from 'jotai'
import { shipAtom } from '../atom/ship'

const ShippingList = () => {
  const [shipList, setShipList] = useAtom(shipAtom)
  const updateState = (id: string, toState: string) => {
    alert()
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

      {shipList.map((ship) => (
        <>
          <Stack
            Top={<InfoCard ship={ship} />}
            openable={ship.progress !== '100%'}
            Ground={
              <GroundForm
                id={ship.id}
                state={ship.progress !== '100%' ? '배송완료' : ''}
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
