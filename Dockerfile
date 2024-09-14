# Используем официальный образ Node.js
FROM node:alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package.json package-lock.json ./

# Удаляем package-lock.json и node_modules (на случай ошибки)
RUN rm -rf node_modules package-lock.json

# Устанавливаем зависимости
RUN npm install

# Копируем оставшиеся файлы проекта
COPY . .

# Собираем проект
RUN npm run build

# Используем nginx для обслуживания статических файлов
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Экспонируем порт
EXPOSE 80

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]
