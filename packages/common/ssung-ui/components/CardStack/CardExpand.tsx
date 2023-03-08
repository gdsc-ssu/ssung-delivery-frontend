import { hangul } from '@common/utils'
import styled from '@emotion/styled'
import { Flex } from '../Layout'
import { Text } from '../Text'

interface CardExpand {
  product: string
  shipper: string
  phone: string
}

const CardExpand = (props: CardExpand) => {
  return (
    <Container>
      <Flex flexDirection={'column'}>
        <Text lineHeight={'1.25rem'}>
          <>
            <Text color={'var(--primary)'}>{props.shipper}</Text>{' '}
            {hangul.josa(props.shipper, '이,가')} 발송한
          </>
        </Text>
        <Text lineHeight={'1.25rem'}>
          <Text color={'var(--primary)'}>{props.product}</Text>{' '}
          {hangul.josa(props.product, '을,를')}
        </Text>
        <Text lineHeight={'1.25rem'}>배송 중이에요</Text>
      </Flex>

      <Flex flexDirection={'row'} justifyContent={'space-between'}>
        <Text gray size={'sm'}>
          {props.phone}
        </Text>
        <Text gray size={'sm'}>
          문의하기
        </Text>
      </Flex>
    </Container>
  )
}

export default CardExpand

const Container = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`
