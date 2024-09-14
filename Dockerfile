FROM node:alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN rm -rf node_modules package-lock.json

RUN npm install

COPY . .

RUN npm run build

EXPOSE 80

CMD ["npm", "start"]
