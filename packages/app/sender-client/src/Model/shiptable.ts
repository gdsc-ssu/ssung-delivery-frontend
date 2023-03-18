// 운송 정보 관련 데이터 interface, type 정의

export interface ShippingStepType {
    ordered: boolean
    shipping: boolean
    outForDelivery: boolean
    shipped: boolean
}

export interface ShipTableData {
    id: string
    product: string
    name: string
    phone: string
    label: string
    registerdate: string
    history: string
}