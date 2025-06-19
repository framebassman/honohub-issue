FROM node:24-bookworm
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package.json package-lock.json .
RUN npm install
COPY . .
EXPOSE 8787
CMD [ "npm", "run", "dev"]