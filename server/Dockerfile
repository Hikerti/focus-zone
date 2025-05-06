FROM node:18

WORKDIR /usr/src/app  

COPY .env .env
COPY package*.json ./
COPY prisma ./prisma

RUN npm i

COPY . .

RUN npm run build

CMD ["npm", "run", "start:dev"]