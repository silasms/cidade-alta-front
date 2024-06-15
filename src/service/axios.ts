import axios from "axios";

const API_LOCALHOST = "http://localhost:3000/";

export const api = axios.create({
  baseURL: API_LOCALHOST,
  headers: {
    "Content-Type": "application/json",
  },
});
