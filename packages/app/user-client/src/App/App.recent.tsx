import { memo } from 'react'
import Card from '../component/Card'
import { Flex, Spacer } from '../component/Layout'
import { SubTitle } from '../component/Text'

const Recent = () => {
  // 배송 중인 정보 카드 캐로셀

  return (
    <div>
      <SubTitle>최근 배송</SubTitle>
      <Spacer height="1rem" />
      <Flex gap="1rem" style={{ overflowX: 'scroll' }}>
        <Card icon="/profile.svg" />
        <Card icon="/profile.svg" />
        <Card icon="/profile.svg" />
        <Card icon="/profile.svg" />
        <Card icon="/profile.svg" />
      </Flex>
    </div>
  )
}

export default memo(Recent)
