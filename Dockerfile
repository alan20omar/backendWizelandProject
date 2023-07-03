FROM node:16.15.0

RUN mkdir -p /Users/10037963/Downloads/app/node_modules && chown -R node:node /Users/10037963/Downloads/app

WORKDIR /Users/10037963/Downloads/app

COPY --chown=node:node package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

EXPOSE 3001

CMD [ "node", "index.js" ]