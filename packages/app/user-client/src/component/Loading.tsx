import { Flex } from '@/../../common/ssung-ui'
import styled from '@emotion/styled'

const Loading = () => {
  return <Container>로딩 중...</Container>
}

export default Loading

const Container = styled(Flex)`
  display: flex;
  margin: 0 auto;
  height: 120px;
`
