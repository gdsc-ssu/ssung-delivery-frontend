import Lottie from 'react-lottie'
import data from './reqLogin.json'

const UserError = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div>
      <Lottie options={defaultOptions} height={240} width={240} />
    </div>
  )
}

export default UserError
