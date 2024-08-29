import axios from 'axios';
import { BFF_CONFIG } from '../config/config';

const { HOST, PORT } = BFF_CONFIG;

export function getChildrenFromDB() {
    return axios.get(`http://${HOST}:${PORT}/children`)
        .then(response => {
            return response.data;
        })
        .catch(err => {
            console.log('Ошибка получения данных', err);
        });
};