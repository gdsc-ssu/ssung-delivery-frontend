import Header from './App.header'
import Recent from './App.recent'
import SearchBar from './App.searchBar'
import Shipping from './App.shipping'
import { useCallback, useRef, useState } from 'react'
import {
  BodyContainer,
  ComponentContainer,
  Flex,
  Spacer,
} from '@common/ssung-ui/components/Layout'
import { SubTitle } from '@common/ssung-ui'
import Empty from '../component/Empty'
import { SHIP_MOCK_DATA } from '../Model/ship.mock'
import { ShipData } from '../Model/ship'
import { Text } from '@/../../common/ssung-ui/components'

function App() {
  const [searchID, setSearchID] = useState<string>('')
  const [shipInfo, setShipInfo] = useState<ShipData>()
  const [noData, setNodata] = useState<boolean>(false)
  const [isInputFoucs, setIsInputFoucs] = useState<boolean>(false)

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

  const initSearch = () => {
    setSearchID('')
    setShipInfo(undefined)
    setIsInputFoucs(true)
  }

  return (
    <>
      <BodyContainer>
        <Spacer height="3rem" />

        <Header />
        <Spacer height="3rem" />

        <SearchBar
          setIsInputFoucs={setIsInputFoucs}
          isInputFoucs={isInputFoucs}
          searchID={searchID}
          setSearchID={setSearchID}
          onSearch={onSearchShipping}
        />
        <Spacer height="3rem" />

        <ComponentContainer>
          <Flex justifyContent={'space-between'}>
            <SubTitle>배송 조회</SubTitle>

            <Text
              color="var(--form-text)"
              fontSize="0.875rem"
              style={{ textDecoration: 'underline' }}
              onClick={() => {
                initSearch()
              }}
            >
              {shipInfo ? '초기화' : '검색하기'}
            </Text>
          </Flex>

          {shipInfo ? (
            <Shipping shippingData={shipInfo} />
          ) : (
            <div onClick={() => setIsInputFoucs(true)}>
              <Empty
                text={
                  noData
                    ? '검색 가능한 배송 정보가 없습니다.'
                    : '지금 검색을 해봐요!!!'
                }
              />
            </div>
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
