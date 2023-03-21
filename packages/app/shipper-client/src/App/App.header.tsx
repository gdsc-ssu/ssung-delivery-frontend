import {
  ComponentContainer,
  Flex,
  SignIn,
  SignUp,
  Title,
} from '@common/ssung-ui'
import { useModal } from '@common/ssung-ui'
import React from 'react'
import { initialShipperUser } from '../model/user'
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
        <SignUp
          step1={Object.keys(initialShipperUser).splice(0, 3)}
          step2={Object.keys(initialShipperUser).splice(3, 6)}
          toUrl={'/client/create'}
        />
      </SignUpModal>

      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Title>안녕하세요, 000님</Title>
        <img src={'./profile.svg'} alt="프로필 사진" onClick={onSignInOpen} />
      </Flex>
    </ComponentContainer>
  )
}

export default React.memo(Header)
// export default Header
