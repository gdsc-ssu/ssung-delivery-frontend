import Header from './App.header'
import { css } from '@emotion/react'
import '../styles/global.css'
import { BodyContainer, Spacer } from '../component/Layout'
import { useCallback, useState } from 'react'

function App() {
    const [searchID, setSearchID] = useState<string>()
    const onSearchShipping = useCallback(() => {}, [])

    return (
        <BodyContainer>
            <Spacer height="3rem" />

            <Header logo={'../logo.svg'} username={'카리나'} profileThumb={'../profile.svg'} />
            <Spacer height="3rem" />
        </BodyContainer>
    )
}

export default App