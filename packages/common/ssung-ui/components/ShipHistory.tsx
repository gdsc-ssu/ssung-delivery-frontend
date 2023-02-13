import styled from '@emotion/styled'
import { Flex } from './Layout'
import Progress from './ProgressBar'
import { Text } from './Text'

interface ShipHistoryType {
  done: boolean
  state: string
  date: string
}
interface ShipHistoryProps {
  history: ShipHistoryType[]
  progress: string
}
const ShipHistory = (props: ShipHistoryProps) => {
  return (
    <ShipHistoryContainer>
      <div style={{ position: 'sticky', top: 0 }}>
        <Progress progress={props.progress} orient="vertical" />
      </div>

      <Flex
        flexDirection={'column'}
        gap={'1rem'}
        style={{ marginLeft: '1rem' }}
      >
        {props.history.map((item) => (
          <Flex flexDirection={'column'} gap={'0.25rem'}>
            <Text gray={!item.done}>{item.state}</Text>
            <Text size="sm" gray={!item.done}>
              {item.date}
            </Text>
          </Flex>
        ))}
      </Flex>
    </ShipHistoryContainer>
  )
}

export default ShipHistory

const ShipHistoryContainer = styled.div`
  padding: 14px;
  width: 140px;
  height: 140px;
  overflow: scroll;
  position: relative;
`
