FROM node:15-alpine AS builder
COPY --chown=node:node ./package*.json ./
RUN npm install && npm cache clean --force --loglevel=error
COPY ../../tsconfig.json ./
COPY ../../tsconfig.build.json ./
COPY ../../.env ./
COPY ../../src ./src/
RUN npm run build

FROM node:15-alpine
RUN mkdir /home/node/app/ && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY --chown=node:node --from=builder ../../node_modules ./node_modules
COPY --chown=node:node --from=builder ../../dist ./dist
COPY --chown=node:node --from=builder ./package*.json ./
COPY --chown=node:node --from=builder ../../.env ./
USER node
RUN npm prune --production
CMD [ "npm", "run", "start:prod"]
