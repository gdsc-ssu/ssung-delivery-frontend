import { Camera, ComponentContainer, Flex } from '@common/ssung-ui/components'
import styled from '@emotion/styled'
import { Dispatch, memo, SetStateAction, useState } from 'react'

interface SearchBarProps {
  searchID?: string
  setSearchID: Dispatch<SetStateAction<string | undefined>>
  onSearch: () => void
}

const SearchBar = (props: SearchBarProps) => {
  const [cam, setCam] = useState<boolean>(false)
  const [qrCodeResult, setQrCodeResult] = useState<string>('')

  const fetchShipmentInfo = () => {
    setQrCodeResult('')
  }

  // 검색 창 + 버튼
  return (
    <ComponentContainer>
      <Flex alignItems={'center'} justifyContent={'center'} gap={'1rem'}>
        <input
          value={qrCodeResult}
          onChange={(e) => setQrCodeResult(e.target.value)}
        />
        {cam && <Camera open={setCam} setResult={setQrCodeResult} />}
        <ActionButton onClick={() => setCam(!cam)}>
          {cam ? 'X' : '카메라'}
        </ActionButton>
        <ActionButton style={{ zIndex: 0 }} onClick={fetchShipmentInfo}>
          검색
        </ActionButton>
      </Flex>
    </ComponentContainer>
  )
}

export default memo(SearchBar)

const ActionButton = styled.button`
  z-index: 2;
`
