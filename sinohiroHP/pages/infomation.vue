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
                  <h3>Infomation</h3>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>

        <v-container> 
          <v-row dense>
            <v-col
              v-for="(infomationItem, i) in infomationItems"
              :key="i"
              cols="12"
            >
              <v-card
                :color="infomationItem.color"
                dark
              >
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title
                      class="text-h5"
                      v-text="infomationItem.name"
                    ></v-card-title>

                    <v-card-subtitle v-text="infomationItem.date"></v-card-subtitle>

                    <v-card-text v-text="infomationItem.contents"></v-card-text>

                    <v-card-actions v-if="infomationItem.linkname !== null">
                      <v-btn
                        class="ml-2 mt-1"
                        outlined
                        rounded
                        x-large
                        v-text="infomationItem.linkname"
                        :href="infomationItem.url"
                        target="_blank"
                      ></v-btn>
                    </v-card-actions>
                  </div>
                  <v-img 
                    v-if="infomationItem.img !== null"
                    class="ma-3"
                    max-height="200"
                    max-width="200"
                    :src="require('@/assets/img/' + infomationItem.img)"
                  ></v-img>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-main>
    <AppFooter/>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import imfomation from './common/imfomation.js'
 
export default {
  name: 'infomation',
  components: {
    AppHeader,
    AppFooter
  },
  data () {
    return {
      drawer: false,
      infomationItems: imfomation.infomationItems,
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