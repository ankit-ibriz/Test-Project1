FROM node:slim
WORKDIR /backend
COPY . /backend
RUN npm install
EXPOSE 80
CMD node test.js