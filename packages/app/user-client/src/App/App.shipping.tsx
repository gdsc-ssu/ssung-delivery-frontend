import { memo } from 'react'
import Card from '../component/Card'
import { Flex, Spacer } from '../component/Layout'
import { SubTitle, Text } from '../component/Text'

const Shipping = () => {
  // 배송 중인 정보 카드 스택
  // 배송 중인 정보 카드 위치 (진행 상태)

  return (
    <div>
      <SubTitle>배송 중</SubTitle>
      <Spacer height="1rem" />
      <Flex justifyContent={'space-between'}>
        <div>
          <Card />
          {/* <Text>안녕하세요</Text> */}
        </div>
        <div>배송 현재 진행 바</div>
      </Flex>
    </div>
  )
}

export default memo(Shipping)
