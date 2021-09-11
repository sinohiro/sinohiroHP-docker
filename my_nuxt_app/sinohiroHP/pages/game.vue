<template>
  <v-app>
    <AppHeader/>
    <v-main>
      <section class="about">
        <v-card
            color="#333"
            dark
            tile
          >
            <v-container>
              <v-row class="home-contents">
                <v-col>
                  <div class="text-center">
                    <h3>Game</h3>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        <!-- <v-container> -->
          
          <v-row dense>
            <v-col
              v-for="(gameItem, i) in gameItems"
              :key="i"
              cols="12"
            >
            <!-- minecraft_server-contents -->
              <v-card
                v-if="gameItem.name === 'Minecraft_server'"
                :color="gameItem.color"
                dark
                width= 100%
              >
                <v-img
                  :src="require('@/assets/bg_img/' + gameItem.bgimg)"
                  gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
                  height= 90vh
                >
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title
                        class="text-h5"
                        v-text="gameItem.name"
                      ></v-card-title>

                      <v-card-text v-text="gameItem.contents"></v-card-text>
                      <v-card-text>
                        <h2>Minecraftとは</h2>
                        <p>Minecraft（マインクラフト）は, Mojang Studiosによって開発されているサンドボックス型のものづくりゲームで, プレイヤーは, さまざまな種類のブロックやエンティティで構成された3次元の環境を自由に操作しながらプレイします.その多様なゲーム性は, プレイヤーが遊び方を選ぶことができ, 無数の可能性を秘めています.</p>
                        
                        <p>Minecraftでは, Java Edition, Bedrock Edition, およびEducation Editionの3つのエディションが提供されています.</p>
                        
                        <p>現在当サーバで稼働しているサーバはJava Editionとなります.</p>
                      </v-card-text>

                      <v-card-actions v-if="gameItem.linkname !== null">
                        <v-btn
                          class="ml-2 mt-1"
                          outlined
                          rounded
                          x-large
                          v-text="gameItem.linkname"
                          :href="gameItem.url"
                          target="_blank"
                        ></v-btn>
                        <v-btn
                          class="ml-2 mt-1"
                          outlined
                          rounded
                          x-large
                          href="1.16.4_sinohiro_server"
                          target="_blank"
                        >1.16.4 fucity server Web Map</v-btn>
                      </v-card-actions>
                    </div>
                    <v-img 
                      v-if="gameItem.img !== null"
                      class="ma-3"
                      max-height="200"
                      max-width="200"
                      :src="require('@/assets/img/' + gameItem.img)"
                    ></v-img>
                  </div>
                </v-img>  
              </v-card>

              <v-card
                v-else-if="gameItem.bgimg !== null"
                :color="gameItem.color"
                dark
                height = 100%
                width = 100%
              >
                <v-img
                  :src="require('@/assets/bg_img/' + gameItem.bgimg)"
                  gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
                  height= 90vh
                >
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title
                        class="text-h5"
                        v-text="gameItem.name"
                      ></v-card-title>
                      <v-card-subtitle v-text="gameItem.date"></v-card-subtitle>

                      <v-card-text 
                        style="white-space:pre-wrap; word-wrap:break-word;"
                        v-text="gameItem.contents"
                      ></v-card-text>

                      <v-card-actions v-if="gameItem.linkname !== null">
                        <v-btn
                          class="ml-2 mt-1"
                          outlined
                          rounded
                          x-large
                          v-text="gameItem.linkname"
                          :href="gameItem.url"
                          target="_blank"
                        ></v-btn>
                      </v-card-actions>
                    </div>
                    <v-img 
                      v-if="gameItem.img !== null"
                      class="ma-3"
                      max-height="200"
                      max-width="200"
                      :src="require('@/assets/img/' + gameItem.img)"
                    ></v-img>
                  </div>
                </v-img>
              </v-card>

              <v-card
                v-else
                :color="gameItem.color"
                dark
                height = 100%
                width = 100%
              >
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title
                      class="text-h5"
                      v-text="gameItem.name"
                    ></v-card-title>
                    <v-card-subtitle v-text="gameItem.date"></v-card-subtitle>

                    <v-card-text 
                      style="white-space:pre-wrap; word-wrap:break-word;"
                      v-text="gameItem.contents"
                    ></v-card-text>

                    <v-card-actions v-if="gameItem.linkname !== null">
                      <v-btn
                        class="ml-2 mt-1"
                        outlined
                        rounded
                        x-large
                        v-text="gameItem.linkname"
                        :href="gameItem.url"
                        target="_blank"
                      ></v-btn>
                    </v-card-actions>
                  </div>
                  <v-img 
                    v-if="gameItem.img !== null"
                    class="ma-3"
                    max-height="200"
                    max-width="200"
                    :src="require('@/assets/img/' + gameItem.img)"
                  ></v-img>
                </div>
              </v-card>
            </v-col>
          </v-row>
        <!-- </v-container> -->
      </section>
    </v-main>
    <AppFooter/>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import game from './common/game.js'
 
export default {
  name: 'game',
  components: {
    AppHeader,
    AppFooter
  },
  data () {
    return {
      drawer: false,
      gameItems: game.gameItems,
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  height:100%;
  background-color: #333;
  padding-bottom: 35px;
}

h1 {
  font-size: 60px;
}

.text-center{
  h3 {
    font-size: 40px;
  }
}

</style>