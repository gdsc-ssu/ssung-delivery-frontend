import styled from '@emotion/styled'
import Button from '../Form/Button'
import Input from '../Form/Input'
import { Flex, Spacer } from '../Layout'
import { Text } from '../Text'
import React, { useState } from "react"

interface SignInProps {
  moveToSignUp: () => void
}

interface LoginProps {
  id: string
  password: string
}

const SignIn = (props: SignInProps) => {
  const [signInInfo, setSignInInfo] = useState<LoginProps>({
    id: "",
    password: "",
  })

  /** form data state save */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignInInfo({
      ...signInInfo,
      [event.target.name]: event.target.value,
    })
  }

  /** form data submit */
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (!signInInfo.id || !signInInfo.password) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }
    console.log(signInInfo);
  }

  return (
    <Container>
      <ContentTitle>SSUNG 로그인</ContentTitle>

      <Spacer height="0.5rem" />

      <Input id="id" name="id" 
        value={signInInfo.id}
        onChange={handleChange}
        placeholder="아이디" 
      />
      <Input
        id="password" name="password" 
        value={signInInfo.password}
        onChange={handleChange}
        placeholder="비밀번호" 
        type="password" 
      />
      <Spacer height="1rem" />

      <Button onClick={handleSubmit}>
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
