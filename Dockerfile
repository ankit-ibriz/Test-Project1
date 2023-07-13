FROM node:slim
WORKDIR /backend
COPY . /backend
RUN npm install
EXPOSE 5000
CMD node test.js