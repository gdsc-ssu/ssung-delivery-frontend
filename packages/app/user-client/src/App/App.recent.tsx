import { memo } from 'react'
import { Spacer } from '../component/Layout'
import { SubTitle } from '../component/Text'

const Recent = () => {
  // 배송 중인 정보 카드 캐로셀

  return (
    <div>
      <SubTitle>최근 배송</SubTitle>
      <Spacer height="1rem" />
      <div>카드 캐로셀</div>
    </div>
  )
}

export default memo(Recent)
