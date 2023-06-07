import { BodyContainer, Spacer } from '@common/ssung-ui'
import Header from './App.header'
import DashBox from './App.dashBox'
import ShippingList from './App.shippingList'
import useUser from '../service/useUser'
import UserError from '../components/UserError'
import {
  BorderButton,
  Flex,
  SignIn,
  SignUp,
  useModal,
} from '@/../../common/ssung-ui/components'
import { initialShipperUser } from '../model/user'
import { useAtom } from 'jotai'
import { userAtom } from '../atom/user'

function App() {
  // const { user, login } = useUser()
  const [user, setUser] = useAtom(userAtom)
  const { Modal: SignInModal, onModalOpen: onSignInOpen } = useModal()
  const { Modal: SignUpModal, onModalOpen: onSignUpOpen } = useModal()

  const onSignUp = (data: any) => {
    // console.log(data)
    alert('회원가입이 완료되었습니다')
  }

  const onSignIn = (id: string, pw: string) => {
    setUser({ name: '쓩딜리버리', id })
  }

  if (!user.name) {
    return (
      <div style={{ padding: '0 1rem' }}>
        <SignInModal>
          <SignIn moveToSignUp={onSignUpOpen} onSignIn={onSignIn} />
        </SignInModal>

        <SignUpModal>
          <SignUp
            step1={Object.keys(initialShipperUser).splice(0, 3)}
            step2={Object.keys(initialShipperUser).splice(3, 6)}
            onSignUp={(data) => onSignUp(data)}
          />
        </SignUpModal>
        <Spacer height="3rem" />
        <Header text="숭실숭실한 쓩딜리버리" />
        <Spacer height="3rem" />
        <Flex flexDirection="column">
          <UserError />
          <Spacer height="3rem" />
          <BorderButton onClick={onSignInOpen}>로그인하기</BorderButton>
        </Flex>
      </div>
    )
  }

  return (
    <BodyContainer>
      <Spacer height="3rem" />
      <Header text={`${user.name}님 반갑습니다.`} />

      <Spacer height="1rem" />
      <DashBox />
      {/* <NotFound icon={"/empty-qr.svg"} margin={"8rem 7.5rem 2rem 7.5rem"}>
        조회 가능한 배송 목록이 없어요. <br/>QR코드를 스캔해주세요!
      </NotFound>

      <Error icon="/error.svg" margin={"8rem 7.5rem 2rem 7.5rem"}>
        배송 목록을 불러올 수 없어요. <br /> 조금 뒤 다시 접속해주세요!
      </Error> */}

      <Spacer height="3rem" />
      <ShippingList />
    </BodyContainer>
  )
}

export default App
