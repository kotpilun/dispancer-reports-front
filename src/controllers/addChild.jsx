import axios from "./axios";
import { notify } from "../handlers/notify";

export function addChild(data) {
    return axios.post('/children', data) 
        .then(response => {
            notify('success', 'Данные о ребенке успешно добавлены!');
            return response.data;  
        })
        .catch(err => {
            let errMessage = '';
            err.response.data.forEach(item => errMessage += item.msg + '\n')
            notify('error','Ошибка при добавлении ребенка');
            console.log('Ошибка добавления данных', err.response.data);
            throw err;  
        });
}