import { css } from '@emotion/react'
import Header from './App.header'
import Recent from './App.recent'
import SearchBar from './App.searchBar'
import Shipping from './App.shipping'
import '../styles/global.css'

function App() {
  return (
    <div>
      {/* 몇 건이 배송 중인지 */}
      {/* 프로필 이미지 경로 */}
      <Header />
      {/* 검색 키워드 value */}
      {/* 검색 트리거 함수 */}
      <SearchBar />

      <Shipping />

      <Recent />
    </div>
  )
}

export default App
