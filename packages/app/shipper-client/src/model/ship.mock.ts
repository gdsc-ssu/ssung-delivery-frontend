// 배송 관련 데이터  interface, type 정의
// 서버에서 내려오는 타입들 정의

import type { ShipData } from './ship'

export const SHIP_MOCK_DATA: ShipData[] = [
  {
    id: '1',
    keywords: ['기분이', '심심한', '숭실대'],
    product: '구글 픽셀 7',
    progress: '80%',
    destination: '서울시 동작구 상도로 369 숭실대학교',
    history: [
      {
        state: '배송출발',
        date: '2020-01-01',
        done: true,
      },
      {
        state: '옥천 HUB123',
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
    sender: {
      name: '구글',
      phone: '010-1234-5678',
    },
    addressee: {
      name: '네이버',
      phone: '010-1234-5678',
    },
  },
  {
    id: '2',
    keywords: ['슝슝한', '서울대', '대학생'],
    product: '맥북프로 16',
    progress: '10%',
    destination: '서울시 동작구 상도로 369 숭실대학교',
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
    sender: {
      name: '애플',
      phone: '02-820-1234',
    },
    addressee: {
      name: '네이버',
      phone: '010-1234-5678',
    },
  },
  {
    id: '3',
    keywords: ['배고픈', '서울대', '지킴이'],
    product: '아이폰 18',
    progress: '75%',
    destination: '서울시 동작구 상도로 369 숭실대학교',
    history: [
      {
        state: '배송중123',
        date: '2020-01-01',
        done: true,
      },
      {
        state: '동작 HUB',
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
        done: false,
      },
    ],
    sender: {
      name: '프리스비',
      phone: '010-1234-5678',
    },
    addressee: {
      name: '네이버',
      phone: '010-1234-5678',
    },
  },
  {
    id: '4',
    keywords: ['배고픈', '관악산', '아이폰'],
    product: '애플워치',
    progress: '100%',
    destination: '서울시 동작구 상도로 369 숭실대학교',
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
    sender: {
      name: '서울대',
      phone: '010-1234-5678',
    },
    addressee: {
      name: '네이버',
      phone: '010-1234-5678',
    },
  },
  {
    id: '5',
    keywords: ['도착한', '관악산', '스티브'],
    product: '아이패드 프로 12',
    progress: '100%',
    destination: '서울시 동작구 상도로 369 숭실대학교',
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
    sender: {
      name: '네이버',
      phone: '010-1234-5678',
    },
    addressee: {
      name: '네이버',
      phone: '010-1234-5678',
    },
  },
]
