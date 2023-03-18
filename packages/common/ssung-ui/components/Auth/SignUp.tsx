import styled from '@emotion/styled'
import { useState } from 'react'
import Button from '../Form/Button'
import Input from '../Form/Input'
import { Flex, Spacer } from '../Layout'
import Progress from '../ProgressBar'
import { Text } from '../Text'

const SignUp = () => {
  const [step, setStep] = useState<1 | 2>(1)

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
          <Input placeholder="아이디" />
          <Input placeholder="비밀번호" />
          <Input placeholder="비밀번호 확인" />
        </>
      ) : (
        <>
          <Input placeholder="이름" />
          <Input placeholder="전화번호" />
          <Input placeholder="주소" />
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
          <Button onClick={() => goToStep(3)}>
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
