import styled from '@emotion/styled'
import { Flex, Spacer } from '../Layout'
import { Text } from '../Text'
import ProgressBar from '../ProgressBar'
import { useContext, useEffect, useState } from 'react'
import { useScreen } from '@common/utils'
import React from 'react'
import CardExpand from './CardExpand'
import { CardContext } from './CSContext'
import Map from '../Map'

interface HistoryType {
  state: string
  date: string
  done: boolean
}
interface SenderType {
  name: string
  phone: string
}

interface InfoType {
  id: string
  keywords: string[]
  product: string
  progress: string
  history: HistoryType[]
  sender: SenderType
}
interface CardProps {
  expandalble?: boolean
  icon?: string
  idx?: number
  expandComponent?: React.ReactNode
  shipInfo: InfoType
  style?: React.CSSProperties;
}

const Card = (props: CardProps) => {
  const [isExpand, setIsExpand] = useState<boolean>(false)
  const { width } = useScreen()
  const { domIdx } = useContext(CardContext)

  useEffect(() => {
    setIsExpand(false)
  }, [domIdx])

  const getLastShipState = (history: HistoryType[]) => {
    const lastState = history.filter((hist) => hist.done === true)
    return lastState[lastState.length - 1]
  }

  return (
    <Container expand={isExpand} expandWidth={width}>
      <Flex>
        <CardSquareBox>
          <Flex justifyContent={'space-between'}>
            <div>
              {props.shipInfo.keywords.map((word: string) => (
                <>
                  <Text style={props.style} lineHeight={'1.15rem'}>{word}</Text>
                  <br />
                </>
              ))}
            </div>
            {props.icon && <img src={'/profile.svg'} width="32px" />}
          </Flex>

          <Spacer height="1rem" />

          <Text gray size="sm">
            {props.shipInfo.product}
          </Text>
          <br />
          <Text gray size="sm">
            {getLastShipState(props.shipInfo.history)?.state || ''}
          </Text>
        </CardSquareBox>

        <CardExpandedBox>
          <CardExpand
            product={props.shipInfo.product}
            shipper={props.shipInfo.sender.name}
            phone={props.shipInfo.sender.phone}
          />
        </CardExpandedBox>
      </Flex>

      <MapContainer show={isExpand}>
        <Spacer height="12px" />
        <Map />
        <Spacer height="12px" />
      </MapContainer>

      <ProgressBar progress={props.shipInfo.progress} />

      {props.expandalble && (
        <ExpandArrow
          onClick={() => setIsExpand((prev) => !prev)}
          expand={isExpand}
        >
          {'>'}
        </ExpandArrow>
      )}
    </Container>
  )
}
export default React.memo(Card)

const CardSquareBox = styled.div`
  width: 140px;
  flex-shrink: 0;
`

const CardExpandedBox = styled.div(() => ({
  width: '100%',
  minWidth: '140px',
  position: 'relative',
  flexShrink: '1',
  margin: '0 1rem',
}))

const MapContainer = styled.div(({ show = false }: { show: boolean }) => ({
  height: show ? '200px' : '0px',
  position: 'relative',
  margin: '1rem',
  visibility: show ? 'visible' : 'hidden',
}))

const Container = styled.div(
  ({
    expand = false,
    expandWidth = 280,
  }: {
    expand?: boolean
    expandWidth?: number
  }) => ({
    display: 'flex',
    flexShrink: '0',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    width: expand ? expandWidth - 60 : '140px',
    height: expand ? '364px' : '140px',
    backgroundColor: 'white',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    padding: '12px',
    transition: 'all ease 1s',
    zIndex: 1,
    maxWidth: '580px',
    overflow: 'hidden',
  })
)

const ExpandArrow = styled.div(({ expand = false }: { expand: boolean }) => ({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  right: '14px',
  top: 0,
  bottom: 0,
  transition: 'all ease 1s',
  transform: expand ? 'rotate(-180deg)' : 'rotate(0deg)',
}))
