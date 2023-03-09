import React, { useEffect, useRef, ReactElement } from 'react'
import { Wrapper, Status } from '@googlemaps/react-wrapper'

interface MapComponentProps {
  center: google.maps.LatLngLiteral
  zoom: number
}

const MapComponent = ({ center, zoom }: MapComponentProps) => {
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
        width: `100%`,
        height: '100%',
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
    <Wrapper apiKey="AIzaSyBRDbh6p1NrUFglDS0J4sWUOrmam1jr2Tk" render={render}>
      <MapComponent center={center} zoom={zoom} />
    </Wrapper>
  )
}

export default MapWrapper
