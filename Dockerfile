FROM node:10.16.0-alpine

WORKDIR /source/pipeline_cicd_pos

COPY package.json /source/pipeline_cicd_pos

RUN cd /source/pipeline_cicd_pos && npm i

COPY . .

EXPOSE 3000
CMD ["sh", "-c", "node server.js"]