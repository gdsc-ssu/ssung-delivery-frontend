// 배송 관련 데이터  interface, type 정의
// 서버에서 내려오는 타입들 정의

export interface ShipHistoryType {
  state: string
  date: string
  done: boolean
}

export interface ShipData {
  id: string
  keywords: string[]
  product: string
  status: string
  progress: string
  history: ShipHistoryType[]
}
