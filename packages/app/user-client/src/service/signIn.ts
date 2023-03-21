import axios from 'axios';

export interface RequestBody {
    username: string,
    password: string,
}

const postSigninRequest = async ({...requestBody}: RequestBody) => {
    try {
        const response = await axios.post("https://api.ssung.app/crew/login", requestBody, {
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded'
            }
        });
        console.log(response)
        alert("user login success");
    } catch (error) {
        console.log(error);
        alert('user login failed. please retry.');
    }
}

export default postSigninRequest;