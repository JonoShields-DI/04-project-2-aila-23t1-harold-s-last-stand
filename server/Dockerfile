FROM node:16-alpine
WORKDIR /app

COPY package*.json /app

RUN ["npm", "install"]
COPY . /app
EXPOSE 5001

ENTRYPOINT [ "npm", "start"]
