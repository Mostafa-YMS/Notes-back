FROM node:16

WORKDIR /src
COPY package*.json ./
EXPOSE 7000

FROM base as production
ENV NODE_ENV=production
RUN npm ci
COPY . /
CMD ["node", "./src"]

FROM base as dev
ENV NODE_ENV=development
RUN npm install -g nodemon && npm install
COPY . /
CMD ["nodemon", "./src"]

# RUN npm ci --omit=dev
# COPY . .
# CMD [ "node", "./src" ]
