import Header from './App.header'
import Recent from './App.recent'
import SearchBar from './App.searchBar'
import Shipping from './App.shipping'
import { useCallback, useState } from 'react'
import { BodyContainer, Spacer } from '@common/ssung-ui/components/Layout'
import { CSProvider } from '@common/ssung-ui'

function App() {
  const [searchID, setSearchID] = useState<string>()
  const onSearchShipping = useCallback(() => {}, [])

  return (
    <CSProvider>
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
    </CSProvider>
  )
}

export default App
