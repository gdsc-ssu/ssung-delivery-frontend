// 운송 정보 관련 데이터 interface, type 정의
import { ShipTableData } from "./shiptable"

export const SHIP_TABLE_MOCK_DATA: ShipTableData[] = [
  {
    id: '1',
    product: '구글 픽셀 7',
    name: '유지민',
    phone: '010-9936-1234',
    label: '기분이 슝슝한 숭실대',
    registerdate: '2023.01.24 23:09',
    history: 'Ordered',
  },
  {
    id: '2',
    product: '아이폰 13',
    name: '봉승우',
    phone: '010-1212-1254',
    label: '기분이 서울한 마라탕',
    registerdate: '2023.01.20 19:49',
    history: 'Shipped',
  },
  {
    id: '3',
    product: '애플 펜슬 2',
    name: '송지호',
    phone: '010-5555-4444',
    label: '기분이 싱싱한 고등어',
    registerdate: '2023.02.20 22:52',
    history: 'Out For Delivery',
  },
  {
    id: '4',
    product: '아이패드 7',
    name: '정명진',
    phone: '010-4554-1797',
    label: '짜장면 황홀한 탕수육',
    registerdate: '2022.12.05 21:11',
    history: 'Shipping',
  },
]
