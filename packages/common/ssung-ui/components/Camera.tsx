import styled from '@emotion/styled'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { useZxing } from 'react-zxing'
import { Flex } from './Layout'
import { Text } from './Text'

interface CameraProps {
  open?: Dispatch<SetStateAction<boolean>>
  setResult?: Dispatch<SetStateAction<string>>
}

const Camera = (props: CameraProps) => {
  const [parsedData, setParsedData] = useState<string>('')
  const { ref } = useZxing({
    onResult(result) {
      setParsedData(result.getText())
    },
  })

  const clickParsedData = () => {
    if (!parsedData) return alert('입력된 데이터가 없습니다')
    props.setResult!(parsedData)
    props.open!(false)
  }

  return (
    <Container>
      <Video autoPlay ref={ref} />
      <ParsedData>
        <Flex style={{ padding: '1rem' }}>
          {parsedData ? (
            <Text>{parsedData.slice(0, 25)}</Text>
          ) : (
            <Text gray>QR코드를 스캔해주세요!</Text>
          )}
        </Flex>
        <Button onClick={clickParsedData}>
          <Text color={'white'}>입력</Text>
        </Button>
      </ParsedData>
    </Container>
  )
}

export default Camera

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: var(--bg-transparent);
  z-index: 2;
`

const Video = styled.video`
  border-radius: 1rem;
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 320px;
  height: 320px;
  object-fit: cover;
`

const Button = styled.div`
  cursor: pointer;
  background-color: var(--primary);
  width: 5rem;
  height: 3rem;
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ParsedData = styled.div`
  position: absolute;
  border-radius: 1.5rem;
  top: 400px;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 320px;
  height: 3rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
