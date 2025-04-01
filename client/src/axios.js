import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api", // adjust if your backend runs on a different port
});

export default instance;
