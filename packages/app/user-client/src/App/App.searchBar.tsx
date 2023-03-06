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
  // 검색 창 + 버튼
  return (
    <ComponentContainer>
      <Flex alignItems={'center'} justifyContent={'center'} gap={'1rem'}>
        <input value={qrCodeResult} />
        {cam && <Camera open={setCam} setResult={setQrCodeResult} />}
        <CameraButton onClick={() => setCam(!cam)}>카메라</CameraButton>
      </Flex>
    </ComponentContainer>
  )
}

export default memo(SearchBar)

const CameraButton = styled.button`
  z-index: 2;
`
