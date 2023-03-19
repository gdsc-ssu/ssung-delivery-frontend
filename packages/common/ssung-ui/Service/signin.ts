import axios from 'axios';

export interface RequestBody {
  username: string,
  password: string,
}

const postSigninRequest = async ({...requestBody}: RequestBody) => {
  try {
    const response = await axios.post('https://api.ssung.app/sender/login', requestBody);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export default postSigninRequest;






