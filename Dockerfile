FROM nginx:alpine

COPY .docker/conf/default.conf /etc/nginx/conf.d/
COPY dist /usr/share/nginx/html

COPY .docker/writeEnv.sh /tmp/
RUN chmod +x /tmp/writeEnv.sh

EXPOSE 80

CMD /tmp/writeEnv.sh; exec nginx -g 'daemon off;'
