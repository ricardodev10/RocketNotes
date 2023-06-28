import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotes-1bp3.onrender.com",
});
