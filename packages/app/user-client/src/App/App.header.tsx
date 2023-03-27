import { ComponentContainer, Flex, Title, SignUp, SignIn } from '@common/ssung-ui/components'
import { memo } from 'react'
import { useModal } from '@common/ssung-ui'
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

      <Flex flexDirection={'row'} justifyContent={'space-between'}>
        <div>
          <Title>
            <Title color={'var(--primary)'}>{3}건</Title>이
          </Title>
          <br />
          <Title>배송 중이에요.</Title>
        </div>
        <div>
          <img src={'./profile.svg'} alt="프로필 사진" onClick={onSignInOpen} />
        </div>
      </Flex>
    </ComponentContainer>
  )
}

export default memo(Header)
