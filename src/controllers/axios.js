import axios from "axios";
import { apiURL } from "../config/config.js";

// const { HOST, PORT } = BFF_CONFIG;

const instance = axios.create({
  baseURL: apiURL,
});
console.log("apiURL", apiURL);
export default instance;
