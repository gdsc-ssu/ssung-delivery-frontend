import Header from './App.header'
import { css } from '@emotion/react'
import { BodyContainer, Spacer } from '../component/Layout'
import { useCallback, useState } from 'react'
import styled from '@emotion/styled'
import Form from './App.form'
import Upload from './App.upload'
import ShipTable from './App.shipTable'
import { NotFound, Error } from '@common/ssung-ui/components'

function App() {
  const [searchID, setSearchID] = useState<string>()
  const onSearchShipping = useCallback(() => {}, [])

    return (
        <Container>
            <Spacer height="2rem" />

            <Header logo={'../logo.svg'} username={'카리나'} profileThumb={'../profile.svg'} />
            <Spacer height="2rem" />
            <SenderWrapper>
                <Form />
                <Spacer height="2rem" />
                <Upload></Upload>
                <Spacer height="2rem" />
                <ShipTable />
                {/* <NotFound icon={'/empty-truck.svg'} margin={"5rem auto 0"}>
                    조회 가능한 운송 정보가 없어요.<br />운송 정보를 업로드해주세요!
                </NotFound>
                <Error icon={'error.svg'} margin={"5rem auto 0"}>
                    배송 목록을 불러올 수 없어요.<br /> 조금 뒤 다시 접속해주세요!
                </Error> */}
            </SenderWrapper>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    "backgroundColor":"#f3f3f3"
`;

const SenderWrapper = styled.div`
  width: 85%;
  height: 100%;
  padding: 1.5rem 0.5rem;
  background-color: #ffffff;
  margin: 0 0 0 15%;
  box-shadow: -2px -2px 15px lightgray;
  border-radius: 1.5rem 0 0 0;
`

export default App
