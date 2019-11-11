import axios from 'axios'

const requests = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? "http://106.14.35.196:8081": "http://localhost:8080"
});

export default requests;
