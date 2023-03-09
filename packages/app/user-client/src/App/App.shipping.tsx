import {
  Card,
  CSComponent,
  ComponentContainer,
  Flex,
  ShipHistory,
  Spacer,
  SubTitle,
} from '@common/ssung-ui/components'
import { memo } from 'react'
import { SHIP_MOCK_DATA } from '../Model/ship.mock'

const Shipping = () => {
  return (
    <ComponentContainer>
      <SubTitle>배송 중</SubTitle>
      <Spacer height="1rem" />
      <Flex justifyContent={'space-between'}>
        <CSComponent
          elements={[
            <Card shipInfo={SHIP_MOCK_DATA[0]} expandalble idx={0} />,
            <Card shipInfo={SHIP_MOCK_DATA[1]} expandalble idx={1} />,
            <Card shipInfo={SHIP_MOCK_DATA[2]} expandalble idx={2} />,
          ]}
        />
        <ShipHistory shipInfo={SHIP_MOCK_DATA} />
      </Flex>

      <Spacer height="1rem" />
    </ComponentContainer>
  )
}

export default memo(Shipping)
