FROM node:latest
LABEL Guilherme dos Santos
COPY . /var/www
WORKDIR /var/www
RUN yarn
ENTRYPOINT yarn start:prod
EXPOSE 3000 "80:3000"