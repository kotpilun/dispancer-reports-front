import { notify } from "../handlers/notify";
import axios from "./axios";

export function patchChild(id, data) {
    return axios.patch(`/children/${id}`, data)
        .then(response => {
            notify('success', 'Данные о ребенке успешно изменены!');
            return response.data;
        })
        .catch(err => {
            notify('error','Ошибка изменения данных');
            console.log('Ошибка изменения данных', err);
            throw err;  
        });
};


