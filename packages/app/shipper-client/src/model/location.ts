interface warehouseLocType {
  name: string
  loc: string
}

const WAREHOUSE_LOCATION: warehouseLocType[] = [
  { name: '서울', loc: '' },
  { name: '경기도', loc: '' },
  { name: '광주광역시', loc: '' },
  { name: '부산', loc: '' },
]

type shippingStepType = string

const SHIPPING_STEP: shippingStepType[] = [
  '배송준비중',
  '수거완료',
  '배송 중',
  '배달 중',
  '배송 완료',
]

export { WAREHOUSE_LOCATION, SHIPPING_STEP }
