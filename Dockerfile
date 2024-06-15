FROM node:22.3.0-alpine3.20

RUN echo -e "https://mirror.tuna.tsinghua.edu.cn/alpine/v3.20/main/\nhttps://mirror.tuna.tsinghua.edu.cn/alpine/v3.20/community/" > /etc/apk/repositories && \
    apk add --no-cache bash

# 调试工具
# RUN apk add --no-cache vim curl

ADD . /opt/app
RUN cd /opt/app && npm install
WORKDIR /opt/app

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start" ]
