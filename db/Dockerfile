FROM postgres:13-alpine
WORKDIR /app
COPY ./sql/ /docker-entrypoint-initdb.d/

ENV POSTGRES_PASSWORD=password