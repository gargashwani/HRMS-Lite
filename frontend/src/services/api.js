import axios from 'axios'

const API = axios.create({
  baseURL: 'https://hrms-lite-60vd.onrender.com',
})

export default API
