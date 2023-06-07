import {
  ComponentContainer,
  Flex,
  SignIn,
  SignUp,
  Title,
} from '@common/ssung-ui'
import { useModal } from '@common/ssung-ui'
import React from 'react'
import { initialShipperUser, ShipperUserType } from '../model/user'
import useAuth from '../service/useUser'
// import CONFIG from 'site.config'

const Header = ({ text }: { text: string }) => {
  const { Modal: SignInModal, onModalOpen: onSignInOpen } = useModal()
  const { Modal: SignUpModal, onModalOpen: onSignUpOpen } = useModal()

  const onSignUp = (data: ShipperUserType) => {
    console.log(data)
  }

  return (
    <ComponentContainer>
      <SignInModal>
        <SignIn moveToSignUp={onSignUpOpen} />
      </SignInModal>

      <SignUpModal>
        <SignUp
          step1={Object.keys(initialShipperUser).splice(0, 3)}
          step2={Object.keys(initialShipperUser).splice(3, 6)}
          onSignUp={(data) => onSignUp(data)}
        />
      </SignUpModal>

      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Title>{text}</Title>
        <img src={'./profile.svg'} alt="프로필 사진" onClick={onSignInOpen} />
      </Flex>
    </ComponentContainer>
  )
}

export default React.memo(Header)
// export default Header
