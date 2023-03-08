import Header from './App.header'
import { css } from '@emotion/react'
import '../styles/global.css'
import { BodyContainer, Spacer } from '../component/Layout'
import { useCallback, useState } from 'react'
import styled from '@emotion/styled';
import Form from './App.form'
import Upload from './App.upload'
import ShipTable from './App.shipTable'

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
    height: 87vh;
    padding: 1.5rem 0.5rem;
    background-color: #ffffff;
    margin: 0 0 0 15%;
    box-shadow: -2px -2px 15px lightgray;
    border-radius: 1.5rem 0 0 0;
`;

export default App