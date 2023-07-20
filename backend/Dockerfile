FROM node:lts-alpine

WORKDIR /app

ENV NODE_ENV production

COPY package.json yarn.lock ./

# TODO: Shouldn't install any dependency in docker to reduce size
RUN set -x && yarn --frozen-lockfile --production

COPY . .

CMD [ "yarn", "start:prod" ]