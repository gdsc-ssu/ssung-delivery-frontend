import { memo } from 'react'
import Card from '../component/Card'
import { ComponentContainer, Flex } from '../component/Layout'
import { SubTitle } from '../component/Text'
import { SHIP_MOCK_DATA } from '../Model/ship.mock'

const Recent = () => {
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
        {SHIP_MOCK_DATA.map((info) => (
          <Card icon="/profile.svg" shipInfo={info} key={info.id} />
        ))}
      </Flex>
    </div>
  )
}

export default memo(Recent)
