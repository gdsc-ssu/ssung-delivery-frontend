import styled from '@emotion/styled'
import { CameraOnly, Flex, Spacer, Text, Title } from '@common/ssung-ui'
import { useState } from 'react'
import { WAREHOUSE_LOCATION, SHIPPING_STEP } from '../model/location'

const DashUpdater = () => {
  const [parsedQR, setParsedQR] = useState<string>('')

  const onUpdateShippingState = () => {
    if (!parsedQR) return alert('인식된 정보가 없습니다.')
    alert(parsedQR)
  }

  return (
    <Container>
      <CamContainer>
        <CameraOnly setResult={setParsedQR} />
      </CamContainer>

      <FormContainer>
        <Title>{parsedQR || 'QR을 인식해보세요!'}</Title>
        <Spacer height="0.5rem" />
        <FormRow>
          <LabelForForm>배송상태</LabelForForm>{' '}
          <Select>
            {SHIPPING_STEP.map((step) => (
              <option>{step}</option>
            ))}
          </Select>
        </FormRow>
        <Flex>
          <LabelForForm>위치</LabelForForm>
          <Select>
            {WAREHOUSE_LOCATION.map((loc) => (
              <option>{loc.name}</option>
            ))}
          </Select>
        </Flex>
        <Spacer height="0.5rem" />
        <button onClick={onUpdateShippingState}>UPDATE</button>
      </FormContainer>
    </Container>
  )
}

export default DashUpdater

const FormRow = styled(Flex)`
  height: 1.5rem;
  align-items: center;
`

const LabelForForm = styled(Text)`
  width: 5rem;
  flex-shrink: 0;
`

const Select = styled.select`
  width: 100%;
`

const FormContainer = styled(Flex)`
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;
  z-index: 5;
`

const CamContainer = styled.div`
  width: 320px;
  height: 320px;
  position: relative;
  margin: 0 auto;
`

const Container = styled.div`
  background-color: white;
  padding: 0.5rem;
  border-radius: 0.5rem;
`
