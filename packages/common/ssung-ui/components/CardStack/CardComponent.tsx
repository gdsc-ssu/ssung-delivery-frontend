import styled from '@emotion/styled'
import { Flex, Spacer } from '../Layout'
import { Text } from '../Text'
import ProgressBar from '../ProgressBar'
import { useContext, useEffect, useRef, useState } from 'react'
import { useScreen } from '@common/utils'
import { CardContext, CardDispatchContext } from './CSContext'
import React from 'react'

interface HistoryType {
  state: string
  date: string
  done: boolean
}
interface InfoType {
  id: string
  keywords: string[]
  product: string
  progress: string
  history: HistoryType[]
}
interface CardProps {
  expandalble?: boolean
  icon?: string
  idx?: number
  shipInfo: InfoType
}

const Card = (props: CardProps) => {
  const [isExpand, setIsExpand] = useState<boolean>(false)
  const { width } = useScreen()
  const ref = useRef<HTMLDivElement>(null)

  const { nowCardIdx } = useContext(CardContext)!
  const cardIdDispatch = useContext(CardDispatchContext)
  const updateCardId = (idx: number) =>
    cardIdDispatch({ type: 'SET_NOW_CARD', nowCardIdx: idx })

  useEffect(() => {
    let observer: IntersectionObserver
    if (ref) {
      observer = new IntersectionObserver(
        (dom) => {
          const isItVisible = dom[0].isIntersecting
          const index = props.idx || 0
          console.log(isItVisible, index)
          updateCardId(isItVisible ? index : index - 1)
        },
        { threshold: 1 }
      )
      observer.observe(ref.current!)
    }
    return () => observer && observer.disconnect()
  }, [ref])

  const getLastShipState = (history: HistoryType[]) => {
    const lastState = history.filter((hist) => hist.done === true)
    return lastState[lastState.length - 1]
  }

  return (
    <Container expand={isExpand} expandWidth={width} ref={ref}>
      <Flex justifyContent={'space-between'}>
        <div>
          {props.shipInfo.keywords.map((word: string) => (
            <>
              <Text lineHeight={'1.15rem'}>{word}</Text>
              <br />
            </>
          ))}
        </div>
        {props.icon && <img src={'/profile.svg'} width="32px" />}
      </Flex>

      <Spacer height="1rem" />

      <Text gray size="sm">
        {props.shipInfo.product}
        || {nowCardIdx}
      </Text>
      <br />
      <Text gray size="sm">
        {getLastShipState(props.shipInfo.history)?.state || ''}
      </Text>
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
    height: '140px',
    backgroundColor: 'white',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    padding: '12px',
    transition: 'all ease 1s',
    zIndex: 1,
    maxWidth: '580px',
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
