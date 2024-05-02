import axios from 'axios';

export namespace AuthenApi {
  export const checkLogin = async (payload: any) => {
    const { username, password } = payload;
    const res = await axios.post(`http://localhost:3000/api/login`, payload);
    return res.data;
  };

}


