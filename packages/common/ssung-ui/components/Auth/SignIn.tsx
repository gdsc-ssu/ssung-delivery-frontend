import styled from '@emotion/styled'
import Button from '../Form/Button'
import Input from '../Form/Input'
import { Flex, Spacer } from '../Layout'
import { Text } from '../Text'
import React, { useState } from "react"
import postSigninRequest, { RequestBody } from "../../Service/signin"

interface SignInProps {
  moveToSignUp: () => void
}

interface LoginProps {
  username: string
  password: string
}

const SignIn = (props: SignInProps) => {
  const [signInInfo, setSignInInfo] = useState<LoginProps>({
    username: "",
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
  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (!signInInfo.username || !signInInfo.password) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }
    
    const requestBody: RequestBody = {
      username: signInInfo.username,
      password: signInInfo.password,
    }

    try {
      await postSigninRequest(requestBody);
      alert('로그인이 완료되었습니다!');
    } catch (error) {
      alert('로그인에 실패하였습니다. 다시 시도해주세요.');
    }
  }

  return (
    <Container>
      <ContentTitle>SSUNG 로그인</ContentTitle>

      <Spacer height="0.5rem" />

      <Input id="username" name="username" 
        value={signInInfo.username}
        onChange={handleChange}
        placeholder="사용자 이름" 
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
