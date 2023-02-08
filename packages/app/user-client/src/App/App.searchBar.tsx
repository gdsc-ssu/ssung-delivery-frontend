import { Dispatch, memo, SetStateAction, useState } from 'react'
import Camera from '../component/Camera'
import { ComponentContainer, Flex } from '../component/Layout'

interface SearchBarProps {
  searchID?: string
  setSearchID: Dispatch<SetStateAction<string | undefined>>
  onSearch: () => void
}

const SearchBar = (props: SearchBarProps) => {
  const [cam, setCam] = useState<boolean>(false)
  // 검색 창 + 버튼
  return (
    <ComponentContainer>
      <Flex alignItems={'center'} justifyContent={'center'} gap={'1rem'}>
        <input />
        {cam && <Camera />}
        <button onClick={() => setCam(!cam)}>카메라</button>
      </Flex>
    </ComponentContainer>
  )
}

export default memo(SearchBar)
