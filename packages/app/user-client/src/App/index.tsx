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
import { SHIP_MOCK_DATA } from '../Model/ship.mock'
import { ShipData } from '../Model/ship'

function App() {
  const [searchID, setSearchID] = useState<string>('')
  const [shipInfo, setShipInfo] = useState<ShipData>()
  const [noData, setNodata] = useState<boolean>(false)

  const findShippingDataIdx = (key: string) => {
    return SHIP_MOCK_DATA.findIndex((obj) => obj.keywords === key)
  }
  const onSearchShipping = useCallback(() => {
    const targetIdx = findShippingDataIdx(searchID)
    if (targetIdx === -1) {
      setNodata(true)
      return alert('조회가능한 배송정보가 없습니다')
    }
    setNodata(false)
    setShipInfo(SHIP_MOCK_DATA[targetIdx])
  }, [searchID])

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
          {shipInfo ? (
            <Shipping />
          ) : (
            <Empty
              text={
                noData
                  ? '검색 가능한 배송 정보가 없습니다.'
                  : '지금 검색을 해봐요!!!'
              }
            />
          )}
        </ComponentContainer>
        <Spacer height="3rem" />

        <Recent />

        <Spacer height="3rem" />
      </BodyContainer>
    </>
  )
}

export default App
