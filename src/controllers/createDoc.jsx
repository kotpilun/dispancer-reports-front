import { notify } from "../handlers/notify";
import axios from "./axios";

export async function createDoc(reportData) {
    return axios.post('/docs', reportData, {
        responseType: 'blob', // Указываем, что ожидаем бинарные данные
    })
    .then(response => {
        // Создаем объект URL из полученного Blob
        const url = window.URL.createObjectURL(new Blob([response.data]));

        // Создаем временную ссылку для скачивания
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'reports.zip'); // Имя файла

        // Добавляем ссылку в документ и инициируем скачивание
        document.body.appendChild(link);
        link.click();

        // Удаляем ссылку после скачивания
        link.parentNode.removeChild(link);

        notify('success', 'Документ сформирован');
    })
    .catch(err => {
        notify('error','Ошибка формирования документа');
        console.log('Ошибка формирования документа', err);
    });
}