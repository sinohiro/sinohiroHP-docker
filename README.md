# sinohiro_serverHP

ページ更新しようと前作ったページ見たらなんちゃってSPA(cssとjsで実装)してることが発覚したので
この際にNuxt.js使ってSPAなwebページにしようと思って立ち上げた
(追記2021.07.31) dockerも勉強したくてdockerで動くようにした.

## Requirement
 
* npm

## Docker Setup
```bash
$ docker-compose build
$ docker-compose up -d

# 確認
$ docker images
$ docker ps

# コンテナ接続
$ docker exec -it nuxt_app sh

# コンテナ停止
$ docker-compose down
```

## Build Setup

```bash
# Change current directory
$ cd sinohiroHP

# install dependencies
$ npm install

# serve with hot reload at [server_ip_address]:3000
$ npm run dev

# build for production and launch server
# Build file is put in /dist
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
## Usage

```bash
git clone https://github.com/sinohiro/sinohiroHP.git
cd sinohiroHP
npm install
npm run dev
```
## Attention
 
# server_ip_addressの設定は[nuxt.config.js]の中に以下のフォーマットで入力してください

```js
export default {
	server: {
		port: 3000,
		host: '0.0.0.0'
    }
}
```

# npm run した際にseverity vulnerabilitiesと出た場合.
ここを見て対処してください
https://qiita.com/riversun/items/7f1679509f38b1ae8adb

## References
DockerでNuxt.jsを起動するまで
https://qiita.com/shun012526/items/a9137fcbaae303500ce1 (参照 2021.07.31)
## Author
 
* 作成者: sinohiro
* 所属: National Institute of Technology, Kushiro College
* E-mail: sinohiro@momo-mail.com
