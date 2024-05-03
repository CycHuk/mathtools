ARG APP_DIR="/app"

FROM node:21-alpine as builder
EXPOSE 3000

WORKDIR ${APP_DIR}
COPY package*.json .
RUN npm ci --legacy-peer-deps
COPY . .
CMD npm run start
