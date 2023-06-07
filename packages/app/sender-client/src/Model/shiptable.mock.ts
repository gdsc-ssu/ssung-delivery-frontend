// 운송 정보 관련 데이터 interface, type 정의
import { ShipTableData, ShipHistoryType } from "./shiptable"

export const SHIP_TABLE_MOCK_DATA: ShipTableData[] = [
  {
    id: '1',
    product: '애플 펜슬 2',
    name: '고광서',
    phone: '010-5555-4444',
    label: '불세출 앙골라 참고인',
    registerdate: '2023.02.20 22:52',
    currstate: '배송 완료',
    history: [
      {
        state: 'Ordered',
        date: '2020-01-01',
        done: true,
      },
      {
        state: 'Shipping',
        date: '2020-01-02',
        done: true,
      },
      {
        state: 'Out For Delivery',
        date: '2020-01-02',
        done: true,
      },
      {
        state: 'Shipped',
        date: '2020-01-03',
        done: true,
      },
    ],
  },
  {
    id: '2',
    product: '아이패드 7',
    name: '송지호',
    phone: '010-4554-1797',
    label: '짜장면 황홀한 탕수육',
    registerdate: '2022.12.05 21:11',
    currstate: '출고 완료',
    history: [
      {
        state: 'Ordered',
        date: '2020-01-01',
        done: true,
      },
      {
        state: 'Shipping',
        date: '2020-01-02',
        done: true,
      },
      {
        state: 'Out For Delivery',
        date: '2020-01-02',
        done: false,
      },
      {
        state: 'Shipped',
        date: '2020-01-03',
        done: false,
      },
    ],
  },
]
