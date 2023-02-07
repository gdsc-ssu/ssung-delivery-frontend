import styled from '@emotion/styled'
import { memo } from 'react'
import { Flex } from '../component/Layout'
interface HeaderProps {
  count: number
  profileThumb: string
}

const Header = (props: HeaderProps) => {
  return (
    <div>
      <Flex flexDirection={'row'} justifyContent={'space-between'}>
        <div>
          <div>{props.count}건이</div>
          <div>배송 중이에요.</div>
        </div>
        <div>
          <img src={props.profileThumb} alt="프로필 사진" />
        </div>
      </Flex>
    </div>
  )
}

export default memo(Header)
