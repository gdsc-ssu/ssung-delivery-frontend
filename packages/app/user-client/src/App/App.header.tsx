import styled from '@emotion/styled'
import { memo } from 'react'
import { ComponentContainer, Flex } from '../component/Layout'
import { Text, Title } from '../component/Text'
interface HeaderProps {
  count: number
  profileThumb: string
}

const Header = (props: HeaderProps) => {
  return (
    <ComponentContainer>
      <Flex flexDirection={'row'} justifyContent={'space-between'}>
        <div>
          <Title>
            <Title color={'var(--primary)'}>{props.count}건</Title>이
          </Title>
          <br />
          <Title>배송 중이에요.</Title>
        </div>
        <div>
          <img src={props.profileThumb} alt="프로필 사진" />
        </div>
      </Flex>
    </ComponentContainer>
  )
}

export default memo(Header)
