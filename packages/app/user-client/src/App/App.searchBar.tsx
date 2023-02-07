import { Dispatch, memo, SetStateAction } from 'react'
import { Flex } from '../component/Layout'

interface SearchBar {
  searchID?: string
  setSearchID: Dispatch<SetStateAction<string | undefined>>
  onSearch: () => void
}

const SearchBar = (props: SearchBar) => {
  // 검색 창 + 버튼
  return (
    <Flex alignItems={'center'} justifyContent={'center'} gap={'1rem'}>
      <input />
      <div>버튼</div>
    </Flex>
  )
}

export default memo(SearchBar)
