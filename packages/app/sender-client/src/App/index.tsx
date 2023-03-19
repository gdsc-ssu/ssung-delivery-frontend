import Header from './App.header'
import { css } from '@emotion/react'
import { BodyContainer, Spacer, Flex } from '../component/Layout'
import { Text } from '../component/Text'
import { useCallback, useState } from 'react'
import styled from '@emotion/styled'
import Form from './App.form'
import ShipTable from './App.shipTable'
import { NotFound, Error, ComponentContainer, Title } from '@common/ssung-ui/components'
import ShipInfo from './App.shipInfo'
import Button from '@common/ssung-ui/components/Form/Button'

function App() {
    /** 로그인 여부 상태 */
    const [isSignIn, setIsSignIn] = useState(true);

    return (
        <Container>
            {isSignIn ? 
                <ComponentContainer>
                    <Spacer height="2rem" />
                    <Header logo={'../logo.svg'} username={'카리나'} profileThumb={'../profile.svg'} />
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
                    <Spacer height="2rem" />
                    <Header logo={'../logo.svg'} username={'카리나'} profileThumb={'../profile.svg'} />
                    <Spacer height="2rem" />
                    <SenderWrapper>
                        <Spacer height="2rem" />
                        <Flex flexDirection={'column'} justifyContent={'center'}>
                            <Spacer height="2rem" />
                            <Title style={{"margin":"0 auto", "textAlign":"center", "fontSize":"1.8rem"}}>
                                A new <span style={{"color":"var(--primary)"}}>waybill system</span> for Me and the Environment
                            </Title>
                            <Spacer height="5rem" />
                            <DashboardImg src={'../dashboard.svg'} />
                            <Spacer height="5rem" />
                            <Button style={{"width":"15rem", "alignSelf":"center"}}>
                                <Text color={"white"}>로그인</Text>
                            </Button>
                            <Spacer height="10rem" />
                        </Flex>
                    </SenderWrapper>
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

const DashboardImg = styled.img`
    width: 40rem;
    margin: 0 auto;
`;

export default App
