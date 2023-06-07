import { Camera, ComponentContainer, Flex } from '@common/ssung-ui/components'
import styled from '@emotion/styled'
import { Dispatch, SetStateAction, useRef, useState } from 'react'
import {
  AiOutlineCamera,
  AiOutlineCloseCircle,
  AiOutlineSearch,
} from 'react-icons/ai'

interface SearchBarProps {
  searchID?: string
  setSearchID: Dispatch<SetStateAction<string>>
  setIsInputFoucs: Dispatch<SetStateAction<boolean>>
  onSearch: () => void
  isInputFoucs: boolean
}

const SearchBar = (props: SearchBarProps) => {
  const [cam, setCam] = useState<boolean>(false)
  const inputRef = useRef<HTMLFormElement>()

  if (props.isInputFoucs) {
    inputRef.current?.focus()
    props.setIsInputFoucs(false)
  }

  // 검색 창 + 버튼
  return (
    <ComponentContainer>
      <Flex alignItems={'center'} justifyContent={'center'} gap={'1rem'}>
        <StyledInput
          // @ts-ignore
          ref={inputRef}
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

const StyledInput = styled.input`
  height: 2rem;
  background-color: white;
  border: 2.5px solid var(--bg-gray);
  border-radius: 0.25rem;
  outline: none;
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  :focus {
    border: 2.5px solid var(--primary);
  }
  ::placeholder {
    font-size: 0.875rem;
  }
`
