import axios from 'axios';

export interface RequestBody {
  sender_id: string;
  sender_name: string;
  password: string;
  address: string;
  phone_number: string;
}

const postSignupRequest = async ({...requestBody}: RequestBody) => {
  try {
    const response = await axios.post('https://api.ssung.app/sender/create', requestBody);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export default postSignupRequest;






