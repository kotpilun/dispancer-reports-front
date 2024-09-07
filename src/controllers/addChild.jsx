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


//TODO добавить эту функцию для преобразования даты в DD.MM.YYYY
// const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const day = String(date.getDate()).padStart(2, '0'); // День с ведущим нулем
//     const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяц с ведущим нулем
//     const year = date.getFullYear();
//     return `${day}.${month}.${year}`; // Формат DD-MM-YYYY
// };