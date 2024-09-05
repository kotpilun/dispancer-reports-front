import axios from "./axios";

export function getAllDispancers() {
    return axios.get('/dispancer')
        .then(response => {
            return response.data
        })
        .catch(err => {
            console.log('Ошибка получения данных', err);
        });
};
