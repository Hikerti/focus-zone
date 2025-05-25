FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && \
    npm install @rollup/rollup-linux-x64-gnu --save-optional

RUN apt-get update && apt-get install -y \
    autoconf automake libtool make gcc g++ python3 bash \
 && rm -rf /var/lib/apt/lists/*

COPY . .

RUN npm run build

CMD ["npm", "run", "preview"]
