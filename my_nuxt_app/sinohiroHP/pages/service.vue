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
                  <h3>Service</h3>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>

          <v-row dense>
            <v-col
              v-for="(serviceItem, i) in serviceItems"
              :key="i"
              cols="12"
            >
              <v-card
                v-if="serviceItem.bgimg !== null"
                :color="serviceItem.color"
                dark
                :href="serviceItem.url"
                target="_blank"
              >
                <v-img
                  :src="require('@/assets/bg_img/' + serviceItem.bgimg)"
                  gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
                  height= 30vh
                >
                  <v-container>
                    <div class="d-flex flex-no-wrap justify-space-between">
                      <div>
                        <v-card-title
                          class="text-h2"
                          v-text="serviceItem.name"
                        ></v-card-title>

                        <v-card-text 
                          class="text-h5"
                          style="white-space:pre-wrap; word-wrap:break-word;"
                          v-text="serviceItem.contents"
                        ></v-card-text>

                        <v-card-actions v-if="serviceItem.linkname !== null">
                          <v-btn
                            class="ml-2 mt-1"
                            outlined
                            rounded
                            x-large
                            v-text="serviceItem.linkname"
                            :href="serviceItem.url"
                            target="_blank"
                          ></v-btn>
                        </v-card-actions>
                      </div>
                      <v-img 
                        v-if="serviceItem.img !== null"
                        class="ma-3"
                        max-height="200"
                        max-width="200"
                        :src="require('@/assets/img/' + serviceItem.img)"
                      ></v-img>
                    </div>
                  </v-container>
                </v-img>
              </v-card>

              <v-card
                v-else
                :color="serviceItem.color"
                dark
                :href="serviceItem.url"
                target="_blank"
              >
                <v-container>
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title
                        class="text-h2"
                        v-text="serviceItem.name"
                      ></v-card-title>
                      <v-card-subtitle v-text="serviceItem.date"></v-card-subtitle>

                      <v-card-text 
                        class="text-h5"
                        style="white-space:pre-wrap; word-wrap:break-word;"
                        v-text="serviceItem.contents"
                      ></v-card-text>

                      <v-card-actions v-if="serviceItem.linkname !== null">
                        <v-btn
                          class="ml-2 mt-1"
                          outlined
                          rounded
                          x-large
                          v-text="serviceItem.linkname"
                          :href="serviceItem.url"
                          target="_blank"
                        ></v-btn>
                      </v-card-actions>
                    </div>
                    <v-img 
                      v-if="serviceItem.img !== null"
                      class="ma-3"
                      max-height="200"
                      max-width="200"
                      :src="require('@/assets/img/' + serviceItem.img)"
                    ></v-img>
                  </div>
                </v-container>
              </v-card>

            </v-col>
          </v-row>

      </section>
    </v-main>
    <AppFooter/>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import service from './common/service.js'
 
export default {
  name: 'service',
  components: {
    AppHeader,
    AppFooter
  },
  data () {
    return {
      drawer: false,
      serviceItems: service.serviceItems,
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