FROM node:6

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY gulpfile.babel.js /usr/src/app/
COPY tasks/javascript.js /usr/src/app/tasks/
COPY .babelrc /usr/src/app/
COPY .eslintrc.js /usr/src/app/
COPY src /usr/src/app/src

RUN npm install
RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]
