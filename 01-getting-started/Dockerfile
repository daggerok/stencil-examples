FROM nginx:stable-alpine
MAINTAINER Maksim Kostromin <daggerok@gmail.com>
RUN apk --no-cache add curl
HEALTHCHECK --interval=5s --timeout=5s --retries=50 CMD curl -f http://127.0.0.1:80/ || exit 1
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./www /usr/share/nginx/html
