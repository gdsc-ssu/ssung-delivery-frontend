import { useAtom } from 'jotai'
import { userAtom } from '../atom/user'

const useUser = () => {
  const [user, setUser] = useAtom(userAtom)

  const login = (id: string) => {
    setUser({ name: '', id: id })
  }

  const logout = () => {
    setUser({ name: '', id: '' })
  }

  const isLoggedIn = () => {
    return !!user.name
  }

  const logInfo = () => {
    return user
  }

  return { login, logout, isLoggedIn, logInfo }
}

export default useUser
