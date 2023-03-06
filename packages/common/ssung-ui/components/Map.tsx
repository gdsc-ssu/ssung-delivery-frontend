import React, { useEffect, useRef, ReactElement } from 'react'
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import { useScreen } from '@common/utils'

interface MapComponentProps {
  center: google.maps.LatLngLiteral
  zoom: number
}

const MapComponent = ({ center, zoom }: MapComponentProps) => {
  const { width } = useScreen()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    new window.google.maps.Map(ref.current!, {
      center,
      zoom,
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false,
    })
  })

  return (
    <div
      ref={ref}
      id="map"
      style={{
        borderRadius: '0.5rem',
        maxWidth: '600px',
        width: `${width - 30}px`,
        height: '300px',
        overflow: 'hidden',
      }}
    />
  )
}

const MapWrapper = () => {
  const render = (status: Status): ReactElement => {
    if (status === Status.LOADING) return <h3>{status} ..</h3>
    if (status === Status.FAILURE) return <h3>{status} ..</h3>
    return <h3>{status}</h3>
  }
  const center = { lat: -34.397, lng: 150.644 }
  const zoom = 4

  return (
    <Wrapper apiKey="AIzaSyAFdBw8peFIfuZx5kmyM8oag_GaPX3tGL4" render={render}>
      <MapComponent center={center} zoom={zoom} />
    </Wrapper>
  )
}

export default MapWrapper
