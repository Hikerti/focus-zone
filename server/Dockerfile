FROM node:20
WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./prisma/
COPY .env .env

RUN npm install
RUN npx prisma generate

COPY . .

RUN npm run build

CMD ["npm", "run", "start:dev"]
