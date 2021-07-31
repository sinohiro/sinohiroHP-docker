FROM node:alpine

WORKDIR /app

# コマンド実行
# linux 最新化、gitインストール、npm最新化、vue-cliインストール
RUN apk update && \
 apk add git && \
 npm install -g npm && \
 npm install -g vue-cli

EXPOSE 3000