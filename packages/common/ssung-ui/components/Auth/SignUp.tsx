import styled from '@emotion/styled'
import React from 'react'
import { useState } from 'react'
import Button from '../Form/Button'
import Input from '../Form/Input'
import { Flex, Spacer } from '../Layout'
import Progress from '../ProgressBar'
import { Text } from '../Text'
import { useForm } from '@common/utils'

interface SignUpProps {
  step1: string[]
  step2: string[]
  onSignUp: (T: any) => void
}

const SignUp = (props: SignUpProps) => {
  const [step, setStep] = useState<1 | 2>(1)
  const { formData, register } = useForm<{ [key: string]: string }>({})

<<<<<<< HEAD
=======
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSignUpInfo({
  //     ...signUpInfo,
  //     [event.target.name]: event.target.value,
  //   })
  // }

  // const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   event.preventDefault();
  //   if (signUpInfo.password !== signUpInfo.pwcheck) {
  //     alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
  //     return;
  //   }

  //   const requestBody: RequestBody = {
  //     sender_id: signUpInfo.id,
  //     sender_name: signUpInfo.name,
  //     password: signUpInfo.password,
  //     address: signUpInfo.addr,
  //     sender_phone_number: signUpInfo.tel,
  //   };

  //   try {
  //     await postSignupRequest(requestBody);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
>>>>>>> 7b179ab4c79ec5823fb48c3828411ea3d504cae3
  const goToStep = (toStep: 1 | 2 | 3) => {
    if (toStep === 3) {
      props.onSignUp(formData)
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
          {props.step1.map((id) => (
            <Input {...register(id)} placeholder={id} />
          ))}
        </>
      ) : (
        <>
          {props.step2.map((id) => (
            <Input {...register(id)} placeholder={id} />
          ))}
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
<<<<<<< HEAD
          <Button onClick={() => goToStep(3)}>
=======
          <Button onClick={props.onSignUp}>
>>>>>>> 7b179ab4c79ec5823fb48c3828411ea3d504cae3
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
