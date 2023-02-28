import Header from './App.header'
import { css } from '@emotion/react'
import '../styles/global.css'
import { BodyContainer, Spacer } from '../component/Layout'
import { useCallback, useState } from 'react'
import styled from '@emotion/styled';

function App() {
    const [searchID, setSearchID] = useState<string>()
    const onSearchShipping = useCallback(() => {}, [])

    return (
        <Container style={{"width":"100%", "backgroundColor":"#f3f3f3"}}>
            <Spacer height="2rem" />

            <Header logo={'../logo.svg'} username={'카리나'} profileThumb={'../profile.svg'} />
            <Spacer height="3rem" />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

export default App