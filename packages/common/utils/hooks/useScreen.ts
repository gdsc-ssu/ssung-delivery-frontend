import { useEffect, useState } from 'react'

interface screenType {
  width: number
  height: number
}
const useScreen = () => {
  const [screen, setScreen] = useState<screenType>({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      setScreen({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [setScreen])

  return screen
}

export default useScreen
