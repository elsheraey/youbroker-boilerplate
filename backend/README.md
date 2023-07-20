# Youbroker Backend Service

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository

boilerplate template [repo](https://github.com/brocoders/nestjs-boilerplate/tree/main/src) 

### Requirements

- NodeJS = 16.17.0
- NVM
- yarn 1
- Docker

## Installation
```bash
$ nvm use
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Docker

```bash
# build docker image
$ docker build -t backend .

$ docker run -p 3000:3000 -t backend
```