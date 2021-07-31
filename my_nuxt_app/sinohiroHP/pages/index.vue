<template>
  <v-app>
    <AppHeader/>
    <v-content>
      <Home/>
    </v-content>
    <AppFooter/>
  </v-app>
</template>
 
<script>
import AppHeader from './components/AppHeader.vue'
import Home from './components/home/Home.vue'
import AppFooter from './components/AppFooter.vue'
 
export default {
  name: 'index',
  components: {
    AppHeader,
    Home,
    AppFooter
  }
}
</script>