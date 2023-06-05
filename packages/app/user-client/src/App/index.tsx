import Header from './App.header'
import Recent from './App.recent'
import SearchBar from './App.searchBar'
import Shipping from './App.shipping'
import { useCallback, useState } from 'react'
import {
  BodyContainer,
  ComponentContainer,
  Spacer,
} from '@common/ssung-ui/components/Layout'
import { SubTitle } from '@common/ssung-ui'
import Empty from '../component/Empty'

function App() {
  const [searchID, setSearchID] = useState<string>()
  const [shipInfo, setShipInfo] = useState<any>(false)
  const onSearchShipping = useCallback(() => {}, [])

  return (
    <>
      <BodyContainer>
        <Spacer height="3rem" />

        <Header />
        <Spacer height="3rem" />

        <SearchBar
          searchID={searchID}
          setSearchID={setSearchID}
          onSearch={onSearchShipping}
        />
        <Spacer height="3rem" />

        <ComponentContainer>
          <SubTitle>배송 조회</SubTitle>
          {shipInfo ? <Shipping /> : <Empty />}
        </ComponentContainer>
        <Spacer height="3rem" />

        <Recent />

        <Spacer height="3rem" />
      </BodyContainer>
    </>
  )
}

export default App
