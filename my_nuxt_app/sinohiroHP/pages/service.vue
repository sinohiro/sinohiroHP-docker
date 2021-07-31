<template>
  <v-app>
    <AppHeader/>
    <v-content>
      <section class="about">
        <h2>Service</h2>
      </section>
    </v-content>
    <AppFooter/>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
 
export default {
  name: 'index',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>