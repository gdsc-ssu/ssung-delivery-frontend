import styled from '@emotion/styled'
import { memo } from 'react'
import Card from '../component/Card'
import { ComponentContainer, Flex, Spacer } from '../component/Layout'
import Progress from '../component/ProgressBar'
import { SubTitle, Text } from '../component/Text'

const Shipping = () => {
  // 배송 중인 정보 카드 스택
  // 배송 중인 정보 카드 위치 (진행 상태)

  return (
    <ComponentContainer>
      <SubTitle>배송 중</SubTitle>
      <Spacer height="1rem" />
      <Flex justifyContent={'space-between'}>
        <div>
          <Card />
        </div>

        {/* 컴포넌트 분리 예정 */}
        <ShipHistoryContainer>
          <div style={{ position: 'sticky', top: 0 }}>
            <Progress progress="80%" orient="vertical" />
          </div>

          <Flex
            flexDirection={'column'}
            gap={'1rem'}
            style={{ marginLeft: '1rem' }}
          >
            <Flex flexDirection={'column'} gap={'0.25rem'}>
              <Text>수거완료</Text>
              <Text size="sm" gray>
                2023-02-08
              </Text>
            </Flex>
            <Flex flexDirection={'column'} gap={'0.25rem'}>
              <Text>옥천 HUB</Text>
              <Text size="sm" gray>
                2023-02-08
              </Text>
            </Flex>
            <Flex flexDirection={'column'} gap={'0.25rem'}>
              <Text>옥천 HUB</Text>
              <Text size="sm" gray>
                2023-02-08
              </Text>
            </Flex>
            <Flex flexDirection={'column'} gap={'0.25rem'}>
              <Text>옥천 HUB</Text>
              <Text size="sm" gray>
                2023-02-08
              </Text>
            </Flex>
            <Flex flexDirection={'column'} gap={'0.25rem'}>
              <Text>옥천 HUB</Text>
              <Text size="sm" gray>
                2023-02-08
              </Text>
            </Flex>
          </Flex>
        </ShipHistoryContainer>
      </Flex>
    </ComponentContainer>
  )
}

export default memo(Shipping)

const ShipHistoryContainer = styled.div`
  padding: 14px;
  width: 140px;
  height: 140px;
  overflow: scroll;
  position: relative;
`
