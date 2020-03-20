import axios from 'axios'

const requests = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? "https://jiazheng.mirzat.cn": "http://localhost:8080"
});

export default requests;
