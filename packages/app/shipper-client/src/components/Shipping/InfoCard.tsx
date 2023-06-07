import { ShipData } from '@/src/model/ship'
import { Flex, Text } from '@common/ssung-ui'
import styled from '@emotion/styled'

const InfoCard = (props: { ship: ShipData }) => {
  return (
    <Container>
      <Right>
        <Keywords>
          {props.ship.keywords.split(' ').map((word) => (
            <Text>{word}</Text>
          ))}
        </Keywords>

        <InfoText gray>{props.ship.product}</InfoText>
      </Right>

      <Left>
        <Text fontSize={'0.875rem'}>{props.ship.destination}</Text>

        <Flex flexDirection={'column'}>
          <InfoText gray>{props.ship.addressee.name}</InfoText>
          <InfoText gray>{props.ship.addressee.phone}</InfoText>
        </Flex>
      </Left>
    </Container>
  )
}

export default InfoCard

const InfoText = styled(Text)`
  font-size: 0.75rem;
`

const Right = styled(Flex)`
  flex-direction: column;
  width: 40%;
  justify-content: space-between;
`

const Left = styled(Flex)`
  flex-direction: column;
  width: 60%;
  justify-content: space-between;
`

const Keywords = styled(Flex)`
  flex-direction: column;
`

const Container = styled(Flex)`
  background-color: white;
  border-radius: 1rem;
  height: 100%;
  width: 92.5%;
  padding: 1rem;
  box-sizing: border-box;
`
