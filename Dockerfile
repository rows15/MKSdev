FROM node:16.14.2


WORKDIR "/workspace"

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3001

CMD ["npm","run","dev"]