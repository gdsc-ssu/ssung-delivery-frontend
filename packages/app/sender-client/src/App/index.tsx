import Header from './App.header'
import { css } from '@emotion/react'
import '../styles/global.css'
import { BodyContainer, Spacer } from '../component/Layout'
import { useCallback, useState } from 'react'
import styled from '@emotion/styled';
import Form from './App.form'

function App() {
    const [searchID, setSearchID] = useState<string>()
    const onSearchShipping = useCallback(() => {}, [])

    return (
        <Container style={{"width":"100%", "backgroundColor":"#f3f3f3"}}>
            <Spacer height="2rem" />

            <Header logo={'../logo.svg'} username={'카리나'} profileThumb={'../profile.svg'} />
            <Spacer height="2rem" />
            <SenderWrapper>
                <Form />
            </SenderWrapper>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

const SenderWrapper = styled.div`
    width: 88%;
    height: 87vh;
    padding: 2rem;
    background-color: #ffffff;
    margin: 0 0 0 12%;
    box-shadow: -2px -2px 15px lightgray;
    border-radius: 3rem 0 0 0;
`;

export default App