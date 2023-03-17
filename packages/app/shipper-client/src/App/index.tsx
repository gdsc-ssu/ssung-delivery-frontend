import { BodyContainer, Spacer, Text } from '@common/ssung-ui'
import Header from './App.header'
import DashBox from './App.dashBox'
import ShippingList from './App.shippingList'
import { NotFound, Error } from '@/../../common/ssung-ui/components'

function App() {
  return (
    <BodyContainer>
      <Spacer height="3rem" />
      <Header />

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
