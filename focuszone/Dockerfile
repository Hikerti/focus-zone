FROM node:18 AS builder
WORKDIR /app

COPY package*.json ./
RUN npm i


COPY . .
RUN npm run build

FROM node:18 AS tester

WORKDIR /app
COPY --from=builder /app ./

RUN npm run test

FROM nginx:alpine AS production

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]