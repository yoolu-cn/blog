FROM yoolu/node-template:latest

#作者信息
LABEL MAINTAINER="jerry@yoolu.cn"

ADD ./docs/.vuepress/dist /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d/default.conf
ADD ./deployment/nginx.conf /etc/nginx/conf.d
