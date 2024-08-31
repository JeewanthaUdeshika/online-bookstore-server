FROM node:current-alpine3.19
FROM node:slim
WORKDIR /app
COPY package*.json ./
RUN apt-get update
RUN npm install
COPY . /app
# -or-
# COPY . .
EXPOSE 3000
CMD ["npm", "start"]