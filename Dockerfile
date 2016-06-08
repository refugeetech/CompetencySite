FROM smebberson/alpine-nginx-nodejs

COPY package.json /app/
WORKDIR /app

RUN npm install

COPY .babelrc ./
COPY gulpfile.js ./

RUN gulp build

COPY webpack.config.prod.js ./
COPY index.html ./
COPY devServer.js ./
COPY nginx/*.conf /etc/nginx/conf.d/

COPY ./src ./src
RUN npm run build
RUN mv dist /usr/html/static
COPY src/assets /usr/html/assets
RUN cp index.html /usr/html/
