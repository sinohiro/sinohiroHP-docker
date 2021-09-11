<template>
  <v-app>
    <AppHeader/>
    <v-main>
      <section class="about">
        <v-container>
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
          
        </v-container>
      </section>
    </v-main>
    <AppFooter/>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
 
export default {
  name: 'infomation',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss" scoped>
.about {
  height:100%;
  background-color: #333;
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