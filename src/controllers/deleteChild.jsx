import { notify } from "../handlers/notify";
import axios from "./axios";

export function deleteChild(id) {
    return axios.delete(`/children/${id}`)
        .then(response => {
            notify('success', 'Данные о ребенке успешно удалены!');
            return response.data;
        })
        .catch(err => {
            notify('error','Ошибка удаления данных');
            console.log('Ошибка удаления данных', err);
        });
}; 