import axios from 'axios'

export const login = (payload) => axios.post(process.env.REACT_APP_LOGIN_URL, { ...payload }, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'Bearer' } });