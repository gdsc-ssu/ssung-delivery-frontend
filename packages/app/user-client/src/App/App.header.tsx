import { ComponentContainer, Flex, Title } from '@common/ssung-ui/components'
import { memo } from 'react'
import CONFIG from 'site.config'

const Header = () => {
  return (
    <ComponentContainer>
      <Flex flexDirection={'row'} justifyContent={'space-between'}>
        <div>
          <Title>
            <Title color={'var(--primary)'}>{2}건</Title>이
          </Title>
          <br />
          <Title>배송 중이에요.</Title>
        </div>
        <div>
          <img src={CONFIG.profileThumbUrl} alt="프로필 사진" />
        </div>
      </Flex>
    </ComponentContainer>
  )
}

export default memo(Header)
