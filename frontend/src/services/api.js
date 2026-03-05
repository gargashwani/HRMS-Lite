import axios from "axios";

const API = axios.create({
  // baseURL: "http://127.0.0.1:8000",
  baseURL: "https://hrms-lite-60vd.onrender.com"
});

export default API;