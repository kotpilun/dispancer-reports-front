import axios from "./axios";
import { notify } from "../handlers/notify";

export function addChild(data) {
    return axios.post('/children', data)  // Возвращаем промис
        .then(response => {
            notify('success', 'Данные о ребенке успешно добавлены!');
            console.log('responsedata', response.data);
            return response.data;  // Возвращаем данные
        })
        .catch(err => {
            let errMessage = '';
            err.response.data.forEach(item => errMessage += item.msg + '\n')
            notify('error', errMessage);
            console.log('Ошибка добавления данных', err.response.data);
            throw err;  // Пробрасываем ошибку, чтобы обработать её в onClickHandle
        });
}