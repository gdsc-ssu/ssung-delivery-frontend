import styled from '@emotion/styled'
import { Dispatch, SetStateAction, useState } from 'react'
import { useZxing } from 'react-zxing'

interface CameraProps {
  open?: Dispatch<SetStateAction<boolean>>
  setResult?: Dispatch<SetStateAction<string>>
}

const CameraOnly = (props: CameraProps) => {
  const [parsedData, setParsedData] = useState<string>('')
  const { ref } = useZxing({
    onResult(result) {
      setParsedData(result.getText())
    },
  })

  return (
    <Container>
      <UnderVideo>로딩 중</UnderVideo>
      <Video autoPlay ref={ref} />
    </Container>
  )
}

export default CameraOnly

const Container = styled.div`
  z-index: 2;
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0 auto;
`

const UnderVideo = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  margin: auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Video = styled.video`
  border-radius: 1rem;
  overflow: hidden;
  margin: auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translateY(-100%);
`
