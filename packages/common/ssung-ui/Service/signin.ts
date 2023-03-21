import axios from 'axios'

export interface RequestBody {
  username: string
  password: string
}

const postSigninRequest = async ({ ...requestBody }: RequestBody) => {
  try {
    const response = await axios.post(
      'https://api.ssung.app/sender/login',
      requestBody
    )
    console.log(response)
    alert('로그인이 완료되었습니다!')
  } catch (error) {
    console.error(error)
    alert('로그인에 실패하였습니다. 다시 시도해주세요.')
  }
}

export default postSigninRequest
