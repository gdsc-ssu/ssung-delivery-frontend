import styled from '@emotion/styled'
import { Dispatch, SetStateAction, useEffect, useRef } from 'react'

interface CameraProps {
  onClose: Dispatch<SetStateAction<boolean>>
}

const Camera = (props: CameraProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    let stream: MediaStream
    ;(async () => {
      try {
        stream = await startVideo()
      } catch {
        alert('카메라 권한을 허용해주세요!')
        console.error('No Camera Permission')
        props.onClose(false)
      }
    })()

    return () => {
      if (stream) {
        stopStream(stream)
      }
    }
  }, [])

  const stopStream = (stream: MediaStream) => {
    if (stream) {
      if (stream.getVideoTracks && stream.getAudioTracks) {
        stream.getVideoTracks().map((track) => {
          stream.removeTrack(track)
          track.stop()
        })
        stream.getAudioTracks().map((track) => {
          stream.removeTrack(track)
          track.stop()
        })
      } else {
        ;(stream as unknown as MediaStreamTrack).stop()
      }
    }
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
