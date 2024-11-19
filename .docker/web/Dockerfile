FROM nginx:1.21.3

ENV TZ Asia/Tokyo

COPY ./.docker/web/ssl/self-signed.crt /etc/nginx/ssl/self-signed.crt
COPY ./.docker/web/ssl/self-signed.key /etc/nginx/ssl/self-signed.key
COPY ./.docker/web/default.conf /etc/nginx/conf.d/default.conf