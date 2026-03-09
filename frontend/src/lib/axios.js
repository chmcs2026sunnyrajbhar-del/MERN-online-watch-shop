import axios from "axios";

const api = axios.create({
  baseURL: "https://mern-online-watch-shop-backend.onrender.com/api",
});

export default api;
