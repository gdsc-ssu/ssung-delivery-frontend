import axios from 'axios';

export interface RequestBody {
    crew_name: string,
    crew_id: string,
    password: string,
    area: string,
    crew_phone_number: string,
}

const postSignupRequest = async ({...requestBody}: RequestBody) => {
    try {
        const response = await axios.post("https://api.ssung.app/crew/create", requestBody);
        console.log(response)
        alert("user sign up success");
    } catch (error) {
        console.log(error);
        alert('user sign up failed. please retry.');
    }
}

export default postSignupRequest;