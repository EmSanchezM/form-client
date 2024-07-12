FROM node:latest

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5173 4000

CMD ["sh", "-c", "npm run server & npm run dev"],