import { Flex, Spacer } from '@/../../common/ssung-ui'
import { Text } from '@/../../common/ssung-ui/components'
import styled from '@emotion/styled'
import Lottie from 'react-lottie'
import data from './empty.json'

const Empty = ({ text = '지금 검색을 해봐요!!!' }: { text?: string }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <Container>
      <Lottie options={defaultOptions} height={100} width={100} />
      <Spacer height="2rem" />
      <Text color="var(--form-text)" style={{ textDecoration: 'underline' }}>
        {text}
      </Text>
    </Container>
  )
}

export default Empty

const Container = styled(Flex)`
  flex-direction: column;
  display: flex;
  margin: 0 auto;
  height: 200px;
  justify-content: center;
  align-items: center;
`
