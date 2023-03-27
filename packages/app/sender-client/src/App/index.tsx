import Header from './App.header'
import { css } from '@emotion/react'
import { Spacer} from '../component/Layout'
import { useState } from 'react'
import styled from '@emotion/styled'
import Form from './App.form'
import ShipTable from './App.shipTable'
import { NotFound, Error, ComponentContainer } from '@common/ssung-ui/components'
import ShipInfo from './App.shipInfo'
import AppDashboard from './App.dashboard'
import SideNav from './App.sideNav'

function App() {
    /** 로그인 여부 상태 */
    const [isSignIn, setIsSignIn] = useState(false);

    return (
        <Container>
            {isSignIn ? 
                <ComponentContainer>
                    <SideNav logined={true} />
                    <Spacer height="2rem" />
                    <Header logo={'../logo.svg'} animation={"../17431-package-delivery.gif"}
                            username={'홍길동'} 
                            profileThumb={'../profile.svg'} />
                    <Spacer height="2rem" />
                    <SenderWrapper>
                        <Form />
                        <Spacer height="2rem" />
                        <ShipInfo />
                        <Spacer height="2rem" />
                        <ShipTable />
                    </SenderWrapper>
                </ComponentContainer>
            : 
                <ComponentContainer>
                    <SideNav logined={false} />
                    <AppDashboard />
                </ComponentContainer>
            }
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
