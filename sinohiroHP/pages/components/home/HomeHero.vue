<template>
  <section class="home-hero">
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
      fluid
      fill-height
    >     
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="require('@/assets/bg_img/' + item.src)"
      >
          <v-row
            class="fill-height"
            align="start"
            justify="start"
          >
            <div class="hero_title">
              <h1>{{ item.title }}</h1>
              <p></p>
              <p>{{ item.messege }}</p>
            </div>
          </v-row>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>

<style  lang="scss" scoped>

h1 {
  font-size: 60px;
}

.hero_title {
  padding: 5%;
  color: white;
  font-size: 30px;
  font-weight: bold;
}

.home-hero {
  @include display_pc {
  }
 
  &-text {
    color: white;
    text-align: center;
    font-size: 72px;
    font-weight: bold;

    @include display_pc {
      font-size: 40px;
    }

  }
}
</style>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'minecraft.jpg',
            title: 'Minecraft Server',
            messege: 'Minecraftサーバのマップ情報をリアルタイムで確認できます.'
          },
          {
            src: 'next_cloud.jpg',
            title: 'Entertainment Cloud',
            messege: 'アカウント登録することで10Gbのクラウドストレージを使用することができます.'
          },
          {
            src: 'game.jpg',
            title: 'Game',
            messege: 'WebGLで動く簡単なゲームを遊ぶことができます.'
          },
          {
            src: 'speedtest.jpg',
            title: 'SpeedTest',
            messege: 'sinohiro serverとの接続テストを行うことができます.'
          },
        ],
      }
    },
  }
</script>