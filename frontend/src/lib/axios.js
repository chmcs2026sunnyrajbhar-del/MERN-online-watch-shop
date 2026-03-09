import axios from "axios";

const api = axios.create({
  baseURL: "https://mern-online-watch-shop-backend.onrender.com/"
});

export default api;
