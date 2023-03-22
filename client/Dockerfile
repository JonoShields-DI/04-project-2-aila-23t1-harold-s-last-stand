FROM node:14-alpine
WORKDIR /app
COPY package*.json /app/
CMD [ "npm", "start" ]
COPY . /app
EXPOSE 3000
ENTRYPOINT ["npm", "start"]