import {
  ComponentContainer,
  Flex,
  SignIn,
  SignUp,
  Text,
  Title,
} from '@common/ssung-ui'
import { useModal } from '@common/ssung-ui'
import { useState } from 'react'
// import CONFIG from 'site.config'

const Header = () => {
  const { Modal: SignInModal, onModalOpen: onSignInOpen } = useModal()
  const { Modal: SignUpModal, onModalOpen: onSignUpOpen } = useModal()

  return (
    <ComponentContainer>
      <SignInModal>
        <SignIn moveToSignUp={onSignUpOpen} />
      </SignInModal>

      <SignUpModal>
        <SignUp />
      </SignUpModal>

      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Title>안녕하세요, 000님</Title>
        <img src={'./profile.svg'} alt="프로필 사진" onClick={onSignInOpen} />
      </Flex>
    </ComponentContainer>
  )
}

export default Header
