FROM node:current-slim

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

RUN npm run build --production

CMD ["npm", "start"]

EXPOSE 8080

COPY . .