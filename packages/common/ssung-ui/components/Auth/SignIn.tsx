import styled from '@emotion/styled'
import Button from '../Form/Button'
import Input from '../Form/Input'
import { Flex, Spacer } from '../Layout'
import { Text } from '../Text'

interface SignInProps {
  moveToSignUp: () => void
}

const SignIn = (props: SignInProps) => {
  return (
    <Container>
      <ContentTitle>SSUNG 로그인</ContentTitle>

      <Spacer height="0.5rem" />

      <Input placeholder="아이디" />
      <Input placeholder="비밀번호" type="password" />
      <Spacer height="1rem" />

      <Button>
        <Text color={'white'}>로그인</Text>
      </Button>

      <UnderlineText gray onClick={props.moveToSignUp}>
        회원가입
      </UnderlineText>
    </Container>
  )
}

export default SignIn

const ContentTitle = styled(Text)`
  text-align: center;
  display: block;
  font-weight: bold;
  font-size: 1.125rem;
`

const UnderlineText = styled(Text)`
  font-size: 0.875rem;
  text-decoration: underline;
  text-align: right;
  display: block;
`

const Container = styled(Flex)`
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 0.5rem;
`
