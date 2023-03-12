import { ComponentContainer } from '@common/ssung-ui'
import styled from '@emotion/styled'

interface InfoCardProps {
  keywords: string[]
  address: string
  product: string
  estimatedArrive: string
  user: {
    name: string
    phone: string
  }
}

const InfoCard = () => {
  return <Container></Container>
}

export default InfoCard

const Container = styled.div`
  background-color: white;
  /* background-color: aliceblue; */
  border-radius: 1rem;
  height: 100%;
  width: 92.5%;
`
