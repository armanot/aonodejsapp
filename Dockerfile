FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8881

CMD [ "node", "server.js"]