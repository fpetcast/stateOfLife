import axios from 'axios';

//object to store the basic app connection
export default () => {
    return axios.create({
      baseURL: `http://localhost:8081/`,
    })
  }