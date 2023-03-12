import { ComponentContainer, Flex, Text, Title } from '@common/ssung-ui'
// import CONFIG from 'site.config'

const Header = () => {
  return (
    <ComponentContainer>
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Title>안녕하세요, 000님</Title>
        <img src={'./profile.svg'} alt="프로필 사진" />
      </Flex>
    </ComponentContainer>
  )
}

export default Header
