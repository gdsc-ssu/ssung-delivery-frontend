import {
  Card,
  ComponentContainer,
  Flex,
  ShipHistory,
  Spacer,
  SubTitle,
} from '@common/ssung-ui/components'
import { SHIP_MOCK_DATA } from '../Model/ship.mock'

const Shipping = () => {
  return (
    <ComponentContainer>
      <Spacer height="1rem" />
      <Flex justifyContent={'space-between'}>
        <Card shipInfo={SHIP_MOCK_DATA[0]} expandalble idx={0} />
        <ShipHistory shipInfo={SHIP_MOCK_DATA} />
      </Flex>

      <Spacer height="1rem" />
    </ComponentContainer>
  )
}

export default Shipping
