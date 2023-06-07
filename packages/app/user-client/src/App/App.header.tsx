import {
  ComponentContainer,
  Flex,
  Title,
  SignUp,
  SignIn,
  Spacer,
} from '@common/ssung-ui/components'
import { memo } from 'react'
import { useModal } from '@common/ssung-ui'
import { Text } from '@common/ssung-ui/components'
import styled from '@emotion/styled'
// import CONFIG from 'site.config'

const Header = () => {
  const { Modal: SignInModal, onModalOpen: onSignInOpen } = useModal()
  const { Modal: SignUpModal, onModalOpen: onSignUpOpen } = useModal()
  const { Modal: CertifyModal, onModalOpen: onCertifyOpen } = useModal()

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
            현재 나의
            <Title color={'var(--primary)'}> 택배위치</Title>를
          </Title>
          <br />
          <Title onClick={onCertifyOpen}>조회해보세요</Title>
          <CertifyModal>
            <Flex
              flexDirection={'column'}
              justifyContent={'center'}
              style={{ marginLeft: '6rem' }}
            >
              <img src={'../warning.jpg'} style={{ width: '10rem' }} />
              <Spacer height="2rem" />
              <Text>인증에 실패했습니다.</Text>
            </Flex>
            <Spacer height="2rem" />
            <BorderButton>닫기</BorderButton>
          </CertifyModal>
        </div>
        <div>
          <img src={'./profile.svg'} alt="프로필 사진" onClick={onSignInOpen} />
        </div>
      </Flex>
    </ComponentContainer>
  )
}

const BorderButton = styled.button`
  width: 10rem;
  height: 2.5rem;
  padding: 0 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.5;
  margin: 1rem 5rem;
  background-color: var(--primary);
  color: white;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #07d39f;
  box-shadow: 1px 1px 5px lightgray;

  &:hover {
    box-shadow: 3px 3px 5px lightgray;
  }
`

export default memo(Header)
