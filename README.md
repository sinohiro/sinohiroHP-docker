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
$ docker exec -it sinohiroHP sh

# コンテナ停止
$ docker-compose down
```

## Development setup

```bash
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
## Release Page

```bash
# clone
$ git clone https://github.com/sinohiro/sinohiroHP-docker.git

# docker setup
$ docker-compose build

# serve with hot reload at [server_ip_address]
$ docker-compose up -d
```
## Attention

### dbのenvファイルをdocker-composeと同じディレクトリに追加してください
下記に例を示します[nc.env]

ユーザー名とパスワードは変更してください

データベース名はnextcloudの初期設定時に必要になります.
```env
MYSQL_PASSWORD=hogehoge
MYSQL_DATABASE=nextcloud
MYSQL_USER=nextcloud
```
 
### server_ip_addressの設定は[nuxt.config.js]の中に以下のフォーマットで入力してください

```js
export default {
	server: {
		port: 3000,
		host: '0.0.0.0'
    }
}
```

### Nextcloud
add settings
nextcloud/config/config.php
```php
'overwriteprotocol' => 'HTTPS',
'default_phone_region' => 'JP',
'trusted_domains' =>
array (
    0 => 'nextcloud',
    1 => '192.168.1.2',
    2 => 'sinohiro.dip.jp',
),
```
### npm run した際にseverity vulnerabilitiesと出た場合.
ここを見て対処してください

https://qiita.com/riversun/items/7f1679509f38b1ae8adb

https://aventures.io/posts/85

多くの場合は下記のコマンドでnpmのpackage.jsonにかかれているもののアップデートを行うことで解消されます
```bash
$ npm install -g npm-check-updates
$ npm-check-updates -u
$ npm update
```

## References
DockerでNuxt.jsを起動するまで
https://qiita.com/shun012526/items/a9137fcbaae303500ce1 (参照 2021.07.31)

Nuxt.js への Vuetify 導入手順
https://blog.proglearn.com/2020/04/07/%E3%80%90%E3%82%B5%E3%83%B3%E3%83%97%E3%83%AB%E6%9C%89%E3%80%91nuxt-js-%E3%81%B8%E3%81%AE-vuetify-%E5%B0%8E%E5%85%A5%E6%89%8B%E9%A0%86%E3%82%92%E8%A7%A3%E8%AA%AC%EF%BC%81/ (参照 2021.09.12)

Vuetify2系のインストールと使い方・書き方
https://yacchi-engineer.com/?p=970 (参照 2021.09.12)

npmのpackage.jsonを最新のバージョンに更新する
https://omachizura.com/2016/02/npm-package-new.html (参照 2021.07.31)

Nuxt × Vuetifyの状況下でv-btnをnuxt-linkにして使いたい
https://qiita.com/checche/items/810a71d8f1f93b251aae (参照 2021.07.31)

VuetifyでFont Awesomeを使う方法
https://shigu493.com/vuetify%E3%81%A7font-awesome%E3%82%92%E4%BD%BF%E3%81%86%E6%96%B9%E6%B3%95/ (参照 2021.07.31)

nextcloud docker hub
https://hub.docker.com/_/nextcloud (参照 2021.09.26)
## Author
 
* 作成者: sinohiro
* 所属: National Institute of Technology, Kushiro College
* E-mail: sinohiro@momo-mail.com
