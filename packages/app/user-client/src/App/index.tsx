import { css } from '@emotion/react'
import Header from './App.header'
import Recent from './App.recent'
import SearchBar from './App.searchBar'
import Shipping from './App.shipping'
import '../styles/global.css'
import { BodyContainer, Spacer } from '../component/Layout'
import { useCallback, useState } from 'react'

function App() {
  const [searchID, setSearchID] = useState<string>()
  const onSearchShipping = useCallback(() => {}, [])

  return (
    <BodyContainer>
      <Spacer height="3rem" />
      {/* 몇 건이 배송 중인지 */}
      {/* 프로필 이미지 경로 */}
      <Header count={2} profileThumb={'./profile.svg'} />
      <Spacer height="3rem" />

      {/* 검색 키워드 value */}
      {/* 검색 트리거 함수 */}
      <SearchBar
        searchID={searchID}
        setSearchID={setSearchID}
        onSearch={onSearchShipping}
      />
      <Spacer height="3rem" />

      <Shipping />
      <Spacer height="3rem" />

      <Recent />
    </BodyContainer>
  )
}

export default App
