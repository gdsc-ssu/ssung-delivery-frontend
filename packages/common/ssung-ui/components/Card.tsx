import styled from '@emotion/styled'
import { Flex, Spacer } from './Layout'
import { Text } from './Text'
import ProgressBar from './ProgressBar'
import { useState } from 'react'
import { useScreen } from '@common/utils'

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
  shipInfo: InfoType
}

const Card = (props: CardProps) => {
  const [isExpand, setIsExpand] = useState<boolean>(false)
  const { width } = useScreen()

  const getLastShipState = (history: HistoryType[]) => {
    const lastState = history.filter((hist) => hist.done === true)
    return lastState[lastState.length - 1]
  }

  return (
    <Container expand={isExpand} expandWidth={width}>
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
export default Card

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
