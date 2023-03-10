import { ComponentContainer, Flex, Spacer, Title } from '@common/ssung-ui'
import styled from '@emotion/styled'
import InfoCard from './Shipping/InfoCard'
import GroundForm from './Shipping/GroundForm'
import Stack from './Shipping/Stack'
import { Text } from '@common/ssung-ui'

const ShippingList = () => {
  return (
    <ComponentContainer>
      <Flex justifyContent={'space-between'}>
        <Title>배송목록</Title>
        <Row>
          <Row>
            <Text>배송 중</Text>
            <ShippingIng type="primary">1232</ShippingIng>
          </Row>
          <Row>
            <Text>배송완료</Text>
            <ShippingIng type="negative">24</ShippingIng>
          </Row>
        </Row>
      </Flex>
      <Spacer height="2rem" />

      <Stack Top={InfoCard} Ground={GroundForm} />
      <Stack Top={InfoCard} Ground={GroundForm} />
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
