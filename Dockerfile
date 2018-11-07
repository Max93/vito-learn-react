FROM node:10.12

RUN mkdir /app
WORKDIR /app

RUN npm install -g gulp
COPY package.json /app
RUN npm install --quiet

COPY . /app
