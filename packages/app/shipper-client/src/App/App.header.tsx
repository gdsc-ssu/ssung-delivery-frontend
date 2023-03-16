import { ComponentContainer, Flex, Text, Title } from '@common/ssung-ui'
import useModal from '../components/Modal'
// import CONFIG from 'site.config'

const Header = () => {
  const { Modal, onModalOpen } = useModal()

  return (
    <ComponentContainer>
      <Modal title="모달">
        <div>안녕하세요</div>
      </Modal>
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Title>안녕하세요, 000님</Title>
        <img src={'./profile.svg'} alt="프로필 사진" onClick={onModalOpen} />
      </Flex>
    </ComponentContainer>
  )
}

export default Header
