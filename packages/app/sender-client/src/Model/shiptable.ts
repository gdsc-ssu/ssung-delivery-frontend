// 운송 정보 관련 데이터 interface, type 정의

export interface ShipTableHistoryType {
    state: string
    date: string
    done: boolean
}

export interface ShipTableData {
    id: string
    keywords: string[]
    product: string
    progress: string
    history: ShipTableHistoryType[]
}