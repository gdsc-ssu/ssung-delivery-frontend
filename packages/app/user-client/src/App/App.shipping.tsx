import { memo } from 'react'
import Card from '../component/Card'
import { ComponentContainer, Flex, Spacer } from '../component/Layout'
import ShipHistory from '../component/ShipHistory'
import { SubTitle } from '../component/Text'
import { ShipHistoryType } from '../Model/ship'

const MOCK_HISTORY: ShipHistoryType[] = [
  { state: '수거 완료', date: '23-02-03', done: true },
  { state: '옥천 HUB', date: '23-02-03', done: true },
  { state: '상도 지점', date: '23-02-03', done: true },
  { state: '배달 출발', date: '23-02-03', done: false },
  { state: '배달 완료', date: '23-02-03', done: false },
]

const Shipping = () => {
  return (
    <ComponentContainer>
      <SubTitle>배송 중</SubTitle>
      <Spacer height="1rem" />
      <Flex justifyContent={'space-between'}>
        <div>
          <Card />
        </div>

        <ShipHistory history={MOCK_HISTORY} />
      </Flex>
    </ComponentContainer>
  )
}

export default memo(Shipping)
