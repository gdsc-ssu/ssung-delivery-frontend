import Header from './App.header'
import Recent from './App.recent'
import SearchBar from './App.searchBar'
import Shipping from './App.shipping'
import '../styles/global.css'
import { useCallback, useState } from 'react'
import { BodyContainer, Spacer } from '@common/ssung-ui/components/Layout'

function App() {
  const [searchID, setSearchID] = useState<string>()
  const onSearchShipping = useCallback(() => {}, [])

  return (
    <BodyContainer>
      <Spacer height="3rem" />

      <Header count={2} profileThumb={'./profile.svg'} />
      <Spacer height="3rem" />

      <SearchBar
        searchID={searchID}
        setSearchID={setSearchID}
        onSearch={onSearchShipping}
      />
      <Spacer height="3rem" />

      <Shipping />
      <Spacer height="3rem" />

      <Recent />

      <Spacer height="3rem" />
    </BodyContainer>
  )
}

export default App
