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
                  <h3>INFORMATION</h3>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>

        <v-container> 
          <v-row dense>
            <v-col
              v-for="(informationItem, i) in informationItems"
              :key="i"
              cols="12"
            >
              <v-card
                :color="informationItem.color"
                dark
              >
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title
                      class="text-h5"
                      v-text="informationItem.name"
                    ></v-card-title>

                    <v-card-subtitle v-text="informationItem.date"></v-card-subtitle>

                    <v-card-text v-text="informationItem.contents"></v-card-text>

                    <v-card-actions v-if="informationItem.linkname !== null">
                      <v-btn
                        class="ml-2 mt-1"
                        outlined
                        rounded
                        x-large
                        v-text="informationItem.linkname"
                        :href="informationItem.url"
                        target="_blank"
                      ></v-btn>
                    </v-card-actions>
                  </div>
                  <v-img 
                    v-if="informationItem.img !== null"
                    class="ma-3"
                    max-height="200"
                    max-width="200"
                    :src="require('@/assets/img/' + informationItem.img)"
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
import imformation from './common/imformation.js'
 
export default {
  name: 'information',
  components: {
    AppHeader,
    AppFooter
  },
  data () {
    return {
      drawer: false,
      informationItems: imformation.informationItems,
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