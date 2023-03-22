FROM node:16-alpine
WORKDIR /app
COPY package*.json /app/
CMD [ "npm", "start" ]
COPY . /app
EXPOSE 3000
ENTRYPOINT ["npm", "start"]