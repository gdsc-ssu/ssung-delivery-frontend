import { memo } from 'react'
import Card from '../component/Card'
import { ComponentContainer, Flex } from '../component/Layout'
import { SubTitle } from '../component/Text'

const Recent = () => {
  // 배송 중인 정보 카드 캐로셀
  return (
    <div>
      <ComponentContainer>
        <SubTitle>최근 배송</SubTitle>
      </ComponentContainer>

      <Flex
        gap="1rem"
        style={{
          overflowX: 'scroll',
          padding: '1rem',
        }}
      >
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
