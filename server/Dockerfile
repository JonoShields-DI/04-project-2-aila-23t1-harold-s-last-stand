FROM node:14-alpine
WORKDIR /app
COPY package*.json /app/
RUN ["npm", "install"]
COPY . /app/
EXPOSE 5001
EXPOSE 5432

ENTRYPOINT [ "npm", "run", "dev", "start" ]