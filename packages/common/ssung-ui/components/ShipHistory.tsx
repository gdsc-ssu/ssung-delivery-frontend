import styled from '@emotion/styled'
import { useContext, useState } from 'react'
import { CardContext } from './CardStack/CSContext'
import { Flex } from './Layout'
import Progress from './ProgressBar'
import { Text } from './Text'

export interface ShipHistoryType {
  state: string
  date: string
  done: boolean
}

export interface ShipData {
  id: string
  keywords: string[]
  product: string
  progress: string
  history: ShipHistoryType[]
}
interface ShipHistoryProps {
  shipInfo: ShipData[]
}
const ShipHistory = (props: ShipHistoryProps) => {
  const cardStackState = useContext(CardContext)
  const [rootCardIdx, setRootCardIdx] = useState<number>(2)

  const updateRootCardIdx = () => {
    const csDom = cardStackState.dom
    if (!csDom) return
    const showedDoms = [...csDom.children].filter(
      // @ts-ignore
      (dom) => !dom.attributes?.style
    )

    setRootCardIdx(showedDoms.length - 1)
  }

  return (
    <ShipHistoryContainer>
      <div style={{ position: 'sticky', top: 0 }}>
        <Progress
          progress={props.shipInfo[rootCardIdx].progress}
          orient="vertical"
        />
      </div>

      <Flex
        flexDirection={'column'}
        gap={'1rem'}
        style={{ marginLeft: '1rem' }}
      >
        {props.shipInfo[rootCardIdx].history.map((item) => (
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
