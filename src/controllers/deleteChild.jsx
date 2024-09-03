import axios from "./axios";

export function deleteChild(id) {
    axios.delete(`/children/${id}`)
        .then(response => {
            return response.data;
        })
        .catch(err => {
            console.log('Ошибка удаления данных', err);
        });
}; 