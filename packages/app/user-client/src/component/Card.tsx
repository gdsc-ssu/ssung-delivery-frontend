import styled from '@emotion/styled'
import { Flex, Spacer } from './Layout'
import { Text } from './Text'
import ProgressBar from './ProgressBar'

interface ShipData {
  id: string
  keywords: string[]
  product: string
  status: string
  progress: string
}
interface CardProps {
  expand?: boolean
  expandalble?: boolean
  icon?: string
  shipInfo?: ShipData
}

const Card = (props: CardProps) => {
  return (
    <Container>
      <Flex justifyContent={'space-between'}>
        <div>
          {props.shipInfo!.keywords.map((word) => (
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
        {props.shipInfo!.product}
      </Text>
      <br />
      <Text gray size="sm">
        {props.shipInfo!.status}
      </Text>
      <ProgressBar progress={props.shipInfo!.progress} />

      {props.expandalble && <ExpandArrow>{'>'}</ExpandArrow>}
    </Container>
  )
}
export default Card

Card.defaultProps = {
  expand: false,
  expandalble: false,
  shipInfo: {
    id: '1',
    product: '구글 픽셀 7',
    status: '도착 예정',
    progress: '80%',
    keywords: ['기분이', '슝슝한', '서울대'],
  },
}

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
