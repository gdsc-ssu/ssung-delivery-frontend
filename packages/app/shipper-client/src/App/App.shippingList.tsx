import { ComponentContainer, Spacer, Title } from '@common/ssung-ui'
import ShippingBox from './Shipping/GroundForm'
import InfoCard from './Shipping/InfoCard'
import GroundForm from './Shipping/GroundForm'
import Stack from './Shipping/Stack'

const ShippingList = () => {
  return (
    <ComponentContainer>
      <Title>배송목록</Title>
      <Spacer height="2rem" />

      <Stack Top={InfoCard} Ground={GroundForm} />
      <Stack Top={InfoCard} Ground={GroundForm} />
    </ComponentContainer>
  )
}

export default ShippingList
