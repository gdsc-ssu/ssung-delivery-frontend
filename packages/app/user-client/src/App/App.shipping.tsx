import { memo } from 'react'
import Card from '../component/Card'
import CardStack from '../component/CardStack'
import { ComponentContainer, Flex, Spacer } from '../component/Layout'
import ShipHistory from '../component/ShipHistory'
import { SubTitle } from '../component/Text'
import { SHIP_MOCK_DATA } from '../Model/ship.mock'

const Shipping = () => {
  return (
    <ComponentContainer>
      <SubTitle>배송 중</SubTitle>
      <Spacer height="1rem" />
      <Flex justifyContent={'space-between'}>
        <CardStack
          elements={[
            <Card shipInfo={SHIP_MOCK_DATA[0]} expandalble />,
            <Card shipInfo={SHIP_MOCK_DATA[1]} expandalble />,
            <Card shipInfo={SHIP_MOCK_DATA[2]} expandalble />,
          ]}
        />
        <ShipHistory
          progress={SHIP_MOCK_DATA[0].progress}
          history={SHIP_MOCK_DATA[0].history}
        />
      </Flex>
    </ComponentContainer>
  )
}

export default memo(Shipping)
