// 운송 정보 관련 데이터 interface, type 정의

export interface ShipHistoryType {
    state: string
    date: string
    done: boolean
}

export interface ShipTableData {
    id: string
    product: string
    name: string
    phone: string
    label: string
    registerdate: string
    history: ShipHistoryType[]
    currstate?: string
}