FROM nginx

ADD ./index.html /usr/share/nginx/html/index.html
ADD ./dist /usr/share/nginx/html/static
