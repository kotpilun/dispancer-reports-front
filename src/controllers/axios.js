import axios from "axios";
import { BFF_CONFIG } from '../config/config.js';

const { HOST, PORT } = BFF_CONFIG;

const instance = axios.create({
    baseURL: `http://${HOST}:${PORT}`
});

export default instance;