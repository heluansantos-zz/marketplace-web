import axios from "axios";

// Documentação Backend Rotas
// https://github.com/RosLuc/marketplace-backend/blob/main/swagger.json

const api = axios.create({
  baseURL: "https://app-market-place.herokuapp.com",
});

export default api;