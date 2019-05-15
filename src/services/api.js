import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-omnistack-erick.herokuapp.com"
});

export default api;
