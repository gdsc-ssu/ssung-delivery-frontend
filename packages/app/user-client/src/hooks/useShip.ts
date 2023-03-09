import { useEffect, useState } from 'react'

const useShip = () => {
  // 배송 중인 택배
  // 배송이 완료된 택배
  // ship id를 통해서 배송 정보 조회
  // 로컬스토리지 저장 및 조회
  // 현재 배송 중인 택배 수 조회
  const [ship, setShip] = useState(null)
  const [count, setCount] = useState(null)
  const [loading, setloading] = useState(true)
  const [error, seterror] = useState('')

  useEffect(() => {
    fetch('url')
      .then((res) => res.json())
      .then((data) => {
        seterror(data.error)
        setShip(data.joke)
        setloading(false)
      })
  }, ['url'])

  return { ship, loading, error }
}
export default useShip
