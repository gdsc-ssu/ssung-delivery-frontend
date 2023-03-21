import { ShipperUser } from '../model/user'
import useFetch from './useFetch'

const useAuth = () => {
  const { post } = useFetch()

  const signUp = async (payload: ShipperUser) => {
    const resoponse = await post<ShipperUser>(
      '/signup',
      payload,
      'shipperSignUp'
    )
    console.log(resoponse)
  }

  return { signUp }
}

export default useAuth
