
import axios from 'axios';

export interface RequestBody {
  sender_id: string;
  sender_name: string;
  password: string;
  address: string;
  sender_phone_number: string;
}

const postSignupRequest = async ({...requestBody}: RequestBody) => {
  try {
    const response = await axios.post('https://api.ssung.app/sender/create', requestBody);
    alert('회원가입이 완료되었습니다!');
    console.log(response);
  } catch (error) {
    alert('회원가입에 실패하였습니다. 다시 시도해주세요.');
    console.error(error);
  }
};

export default postSignupRequest;
