import axios from 'axios'
export const HTTP = axios.create({
  baseURL: 'https://immense-tundra-62701.herokuapp.com/api/v1/'
})
