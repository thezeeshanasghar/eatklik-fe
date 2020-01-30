FROM node:10 as build

WORKDIR /usr/app

COPY package*.json ./

COPY . .

RUN npm install

RUN npm run build

FROM nginx:1.15.8-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build  /usr/app/dist /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf


