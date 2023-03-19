import styled from '@emotion/styled'
import { useState } from 'react'
import Button from '../Form/Button'
import Input from '../Form/Input'
import { Flex, Spacer } from '../Layout'
import Progress from '../ProgressBar'
import { Text } from '../Text'

interface SignUpProps {
  id: string
  password: string
  pwcheck: string
  name: string
  tel: string
  addr: string
}

const SignUp = () => {
  const [step, setStep] = useState<1 | 2>(1)
  const [signUpInfo, setSignUpInfo] = useState<SignUpProps>({
    id: "",
    password: "",
    pwcheck: "",
    name: "",
    tel: "",
    addr: "",
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpInfo({
      ...signUpInfo,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (signUpInfo.password !== signUpInfo.pwcheck) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }
    console.log(signUpInfo);
  }

  const goToStep = (toStep: 1 | 2 | 3) => {
    if (toStep === 3) {
      alert('회원가입 완료')
    } else {
      setStep(toStep)
    }
  }

  return (
    <Container>
      <ContentTitle>SSUNG 회원가입</ContentTitle>
      <Spacer height="0.5rem" />
      {step === 1 ? (
        <>
          <Input 
            id="id" name='id' 
            value={signUpInfo.id} 
            onChange={handleChange}
            placeholder="아이디" 
          />
          <Input 
            id="password" name='password' 
            value={signUpInfo.password} 
            onChange={handleChange}
            placeholder="비밀번호" 
          />
          <Input 
            id="pwcheck" name='pwcheck' 
            value={signUpInfo.pwcheck} 
            onChange={handleChange}
            placeholder="비밀번호 확인"
          />
        </>
      ) : (
        <>
          <Input 
            id="name" name='name' 
            value={signUpInfo.name} 
            onChange={handleChange}
            placeholder="이름" 
          />
          <Input 
            id="tel" name='tel' 
            value={signUpInfo.tel} 
            onChange={handleChange}
            placeholder="전화번호" 
          />
          <Input 
            id="addr" name='addr' 
            value={signUpInfo.addr} 
            onChange={handleChange}
            placeholder="주소" 
          />
        </>
      )}

      <Spacer height="1rem" />

      <Progress progress={`${String((step / 2) * 100)}%`} />

      {step === 1 ? (
        <Button onClick={() => goToStep(2)}>
          <Text color={'white'}>다음</Text>
        </Button>
      ) : (
        <TwoButtonContainer>
          <Button btnType={'gray'} onClick={() => goToStep(1)}>
            <Text gray>이전</Text>
          </Button>
          <Button onClick={handleSubmit}>
            <Text color={'white'}>완료</Text>
          </Button>
        </TwoButtonContainer>
      )}
    </Container>
  )
}

export default SignUp

const TwoButtonContainer = styled(Flex)`
  gap: 1rem;
  width: 100%;
  & > button {
    width: 50%;
  }
`

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
