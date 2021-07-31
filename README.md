# sinohiro_serverHP

ページ更新しようと前作ったページ見たらなんちゃってSPA(cssとjsで実装)してることが発覚したので
この際にNuxt.js使ってSPAなwebページにしようと思って立ち上げた

(追記2021.07.31) dockerも勉強したくてdockerで動くようにした.

## Requirement
 
* docker
* docker-compose

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
 
### server_ip_addressの設定は[nuxt.config.js]の中に以下のフォーマットで入力してください

```js
export default {
	server: {
		port: 3000,
		host: '0.0.0.0'
    }
}
```

### npm run した際にseverity vulnerabilitiesと出た場合.
ここを見て対処してください
https://qiita.com/riversun/items/7f1679509f38b1ae8adb

多くの場合は下記のコマンドでnpmのpackage.jsonにかかれているもののアップデートを行うことで解消されます
```bash
$ npm install -g npm-check-updates
$ npm-check-updates -u
$ npm update
```

## References
DockerでNuxt.jsを起動するまで
https://qiita.com/shun012526/items/a9137fcbaae303500ce1 (参照 2021.07.31)

npmのpackage.jsonを最新のバージョンに更新する
https://omachizura.com/2016/02/npm-package-new.html (参照 2021.07.31)

Nuxt × Vuetifyの状況下でv-btnをnuxt-linkにして使いたい
https://qiita.com/checche/items/810a71d8f1f93b251aae (参照 2021.07.31)

VuetifyでFont Awesomeを使う方法
https://shigu493.com/vuetify%E3%81%A7font-awesome%E3%82%92%E4%BD%BF%E3%81%86%E6%96%B9%E6%B3%95/ (参照 2021.07.31)
## Author
 
* 作成者: sinohiro
* 所属: National Institute of Technology, Kushiro College
* E-mail: sinohiro@momo-mail.com
