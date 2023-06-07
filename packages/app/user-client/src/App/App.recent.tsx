import {
  Card,
  ComponentContainer,
  Flex,
  SubTitle,
} from '@common/ssung-ui/components'
import { SHIP_MOCK_DATA } from '../Model/ship.mock'
import { Dispatch } from 'react'
import { ShipData } from '../Model/ship'

const Recent = ({
  setShipInfo,
}: {
  setShipInfo: Dispatch<React.SetStateAction<ShipData | undefined>>
}) => {
  return (
    <div>
      <ComponentContainer>
        <SubTitle>최근 배송</SubTitle>
      </ComponentContainer>

      <Flex
        gap="1rem"
        style={{
          overflowX: 'scroll',
          padding: '1rem',
        }}
      >
        {SHIP_MOCK_DATA.slice(2).map((info) => (
          <div
            key={info.id}
            onClick={() => {
              setShipInfo(info)
            }}
          >
            <Card
              icon="/profile.svg"
              shipInfo={info}
              style={{ color: 'var(--form-text)' }}
            />
          </div>
        ))}
      </Flex>
    </div>
  )
}

export default Recent
