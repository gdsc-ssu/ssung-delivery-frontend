import {
  Camera,
  ComponentContainer,
  Flex,
  Input,
} from '@common/ssung-ui/components'
import styled from '@emotion/styled'
import { Dispatch, memo, SetStateAction, useState } from 'react'
import { useModal } from '@common/ssung-ui'
import {
  AiOutlineCamera,
  AiOutlineCloseCircle,
  AiOutlineSearch,
} from 'react-icons/ai'

interface SearchBarProps {
  searchID?: string
  setSearchID: Dispatch<SetStateAction<string>>
  onSearch: () => void
}

const SearchBar = (props: SearchBarProps) => {
  const [cam, setCam] = useState<boolean>(false)

  // 검색 창 + 버튼
  return (
    <ComponentContainer>
      <Flex alignItems={'center'} justifyContent={'center'} gap={'1rem'}>
        <Input
          style={{ width: '100%' }}
          value={props.searchID}
          onChange={(e) => props.setSearchID(e.target.value)}
          placeholder="기분이 슝슝한 숭실대"
        />
        {cam && <Camera open={setCam} setResult={props.setSearchID} />}
        <ActionButton onClick={() => setCam(!cam)}>
          {cam ? (
            <AiOutlineCloseCircle size={24} color={'var(--text-gray)'} />
          ) : (
            <AiOutlineCamera size={24} color={'var(--text-gray)'} />
          )}
        </ActionButton>
        <ActionButton style={{ zIndex: 0 }} onClick={props.onSearch}>
          <AiOutlineSearch size={24} color={'var(--text-gray)'} />
        </ActionButton>
      </Flex>
    </ComponentContainer>
  )
}

export default SearchBar

const ActionButton = styled.button`
  z-index: 2;
  background: none;
  color: inherit;
  border: 0px;
  border-radius: 0.25rem;
  padding: 0.5rem 0.5rem;
  outline: inherit;
`
