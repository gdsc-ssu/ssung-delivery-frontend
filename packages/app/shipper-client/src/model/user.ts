export interface ShipperUserType {
  crew_name: string
  crew_id: string
  password: string
  pwcheck: string
  area: string
  crew_phone_number: string
}

export const initialShipperUser: ShipperUserType = {
  crew_id: '',
  password: '',
  pwcheck: '',
  crew_name: '',
  area: '',
  crew_phone_number: '',
}
