import { ShipperUserType } from '../model/user'
import { http } from './http'

const useAuth = () => {
  const signUp = async (payload: ShipperUserType) => {
    try {
      const response = await http.post<ShipperUserType, Response>(
        '/crew/create',
        payload
      )
      return response
    } catch (err) {
      console.log(err)
    }
  }

  return { signUp }
}

export default useAuth
