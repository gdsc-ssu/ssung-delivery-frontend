import styled from '@emotion/styled'
import { memo } from 'react'
import { Flex } from '../component/Layout'
import { Text, Title } from '../component/Text'
interface HeaderProps {
  count: number
  profileThumb: string
}

const Header = (props: HeaderProps) => {
  return (
    <div>
      <Flex flexDirection={'row'} justifyContent={'space-between'}>
        <div>
          <Title>
            <Text color={'var(--primary)'}>{props.count}건</Text>이
          </Title>
          <br />
          <Title>배송 중이에요.</Title>
        </div>
        <div>
          <img src={props.profileThumb} alt="프로필 사진" />
        </div>
      </Flex>
    </div>
  )
}

export default memo(Header)
