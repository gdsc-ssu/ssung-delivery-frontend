import styled from '@emotion/styled'
import { Dispatch, SetStateAction, useState } from 'react'
import { useZxing } from 'react-zxing'

interface CameraProps {
  setResult?: Dispatch<SetStateAction<string>>
}

const CameraOnly = (props: CameraProps) => {
  const { ref } = useZxing({
    onResult(result) {
      const parsedQRResult = result.getText()
      props.setResult?.(parsedQRResult)
    },
  })

  return (
    <Container>
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

const Video = styled.video`
  border-radius: 1rem;
  overflow: hidden;
  margin: auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
