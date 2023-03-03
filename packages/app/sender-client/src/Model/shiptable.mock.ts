// 운송 정보 관련 데이터 interface, type 정의
import { ShipTableData } from "./shiptable"

export const SHIP_TABLE_MOCK_DATA: ShipTableData[] = [
  {
    id: '1',
    keywords: ['기분이', '심심한', '숭실대'],
    product: '구글 픽셀 7',
    progress: '80%',
    history: [
      {
        state: '배송중',
        date: '2020-01-01',
        done: true,
      },
      {
        state: '옥천 HUB',
        date: '2020-01-02',
        done: true,
      },
      {
        state: '배송 출발',
        date: '2020-01-02',
        done: false,
      },
      {
        state: '배송 도착',
        date: '2020-01-03',
        done: false,
      },
    ],
  },
  {
    id: '2',
    keywords: ['슝슝한', '서울대', '대학생'],
    product: '맥북프로 16',
    progress: '10%',
    history: [
      {
        state: '배송중',
        date: '2020-01-01',
        done: true,
      },
      {
        state: '옥천 HUB',
        date: '2020-01-02',
        done: true,
      },
      {
        state: '배송 출발',
        date: '2020-01-02',
        done: false,
      },
      {
        state: '배송 도착',
        date: '2020-01-03',
        done: false,
      },
    ],
  },
  {
    id: '3',
    keywords: ['배고픈', '서울대', '지킴이'],
    product: '아이폰 18',
    progress: '94%',
    history: [
      {
        state: '배송중',
        date: '2020-01-01',
        done: true,
      },
      {
        state: '옥천 HUB',
        date: '2020-01-02',
        done: true,
      },
      {
        state: '배송 출발',
        date: '2020-01-02',
        done: false,
      },
      {
        state: '배송 도착',
        date: '2020-01-03',
        done: false,
      },
    ],
  },
  {
    id: '4',
    keywords: ['배고픈', '관악산', '아이폰'],
    product: '애플워치',
    progress: '100%',
    history: [
      {
        state: '배송중',
        date: '2020-01-01',
        done: true,
      },
      {
        state: '옥천 HUB',
        date: '2020-01-02',
        done: true,
      },
      {
        state: '배송 출발',
        date: '2020-01-02',
        done: true,
      },
      {
        state: '배송 도착',
        date: '2020-01-03',
        done: true,
      },
    ],
  },
  {
    id: '5',
    keywords: ['도착한', '관악산', '스티브'],
    product: '아이패드 프로 12',
    progress: '100%',
    history: [
      {
        state: '배송중',
        date: '2020-01-01',
        done: true,
      },
      {
        state: '옥천 HUB',
        date: '2020-01-02',
        done: true,
      },
      {
        state: '배송 출발',
        date: '2020-01-02',
        done: true,
      },
      {
        state: '배송 도착',
        date: '2020-01-03',
        done: true,
      },
    ],
  },
]
