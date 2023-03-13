import Header from './App.header'
import Recent from './App.recent'
import SearchBar from './App.searchBar'
import Shipping from './App.shipping'
import { useCallback, useState } from 'react'
import { BodyContainer, Spacer } from '@common/ssung-ui/components/Layout'
import { CSProvider } from '@common/ssung-ui'
import { NotFound, Error } from '@/../../common/ssung-ui/components'

function App() {
  const [searchID, setSearchID] = useState<string>()
  const onSearchShipping = useCallback(() => {}, [])

  return (
    <CSProvider>
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
      {/* <NotFound icon={"/empty-box.svg"} margin={"8rem 7.5rem 2rem 7.5rem"}>
        조회 가능한 배송 목록이 없어요. <br/>식별자를 입력해주세요!
      </NotFound>

      <Error icon="/error.svg" margin={"8rem 7.5rem 2rem 7.5rem"}>
        배송 목록을 불러올 수 없어요. <br /> 조금 뒤 다시 접속해주세요!
      </Error> */}

        <Shipping />
        <Spacer height="3rem" />

        <Recent />

        <Spacer height="3rem" />
      </BodyContainer>
    </CSProvider>
  )
}

export default App
