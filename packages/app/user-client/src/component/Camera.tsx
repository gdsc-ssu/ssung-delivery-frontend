import styled from '@emotion/styled'
import { useEffect, useRef } from 'react'

const Camera = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!isCameraAccessOk()) return
    let stream
    ;(() => {
      stream = startVideo()
    })()
  })

  const isCameraAccessOk = () => {
    if (navigator.mediaDevices.getUserMedia === undefined) {
      return console.error('getUserMedia is not implemented in this browser')
    }
    return true
  }

  const startVideo = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true })
    if (videoRef && videoRef.current && !videoRef.current.srcObject) {
      videoRef.current.srcObject = stream
    }
    return stream
  }

  return (
    <Container>
      <Video autoPlay ref={videoRef} />
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
  z-index: 1;
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
