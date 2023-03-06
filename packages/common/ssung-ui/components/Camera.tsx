import styled from '@emotion/styled'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { useZxing } from 'react-zxing'

interface CameraProps {
  open?: Dispatch<SetStateAction<boolean>>
  setResult?: Dispatch<SetStateAction<string>>
}

const Camera = (props: CameraProps) => {
  const { ref } = useZxing({
    onResult(result) {
      props.setResult!(result.getText())
      props.open!(false)
    },
  })

  return (
    <Container>
      <Video autoPlay ref={ref} />
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
