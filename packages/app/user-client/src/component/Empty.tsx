import { Flex } from '@/../../common/ssung-ui'
import styled from '@emotion/styled'

const Empty = () => {
  return <Container>그딴거 없다</Container>
}

export default Empty

const Container = styled(Flex)`
  display: flex;
  margin: 0 auto;
  height: 120px;
  justify-content: center;
  align-items: center;
`
