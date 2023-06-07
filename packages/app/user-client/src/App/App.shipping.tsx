import {
  Card,
  ComponentContainer,
  Flex,
  ShipHistory,
  Spacer,
} from '@common/ssung-ui/components'
import { ShipData } from '../Model/ship'

const Shipping = ({ shippingData }: { shippingData: ShipData }) => {
  return (
    <ComponentContainer>
      <Spacer height="1rem" />
      <Flex justifyContent={'space-between'}>
        <Card shipInfo={shippingData} expandalble idx={0} />
        <ShipHistory shipInfo={shippingData} />
      </Flex>

      <Spacer height="1rem" />
    </ComponentContainer>
  )
}

export default Shipping
