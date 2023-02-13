import styled from '@emotion/styled'
import { Flex, Spacer } from './Layout'
import { Text } from './Text'
import ProgressBar from './ProgressBar'

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
  const getLastShipState = (history: HistoryType[]) => {
    const lastState = history.filter((hist) => hist.done === true)
    return lastState[lastState.length - 1]
  }

  return (
    <Container>
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

      {props.expandalble && <ExpandArrow>{'>'}</ExpandArrow>}
    </Container>
  )
}
export default Card

const Container = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 140px;
  height: 140px;
  background-color: white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 12px;
`

const ExpandArrow = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  right: 14px;
  top: 0;
  bottom: 0;
`
