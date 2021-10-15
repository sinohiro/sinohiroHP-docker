<template>
    <header>
      <v-app-bar
        app
        dark
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title>SINOHIRO SERVER</v-toolbar-title>

        <v-tabs>
          <v-tab
            v-for="(menuItem, index) in menuItems"
            :key="index"
            :to="menuItem.url"
          >
            {{ menuItem.name }}
          </v-tab>
        </v-tabs>

      </v-app-bar>
<!--Hamburger menu-->
      <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
        dark
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group>
            <v-app-bar-nav-icon @click="drawer = false"></v-app-bar-nav-icon>
            <v-list-item
              v-for="(menuItem, index) in menuItems"
              :key="index"
              :to="menuItem.url"
            >
              <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </header>
</template>
 
<script>
import constants from '../common/constants'

export default {
  name: 'AppHeader',
  data () {
    return {
      drawer: false,
      menuItems: constants.menuItems
    }
  }
}
</script>
 
<style lang="scss" scoped>
.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}

.v-app-bar__nav-icon {
  @include display_pc {
    display: none !important;
  }
}

.v-tabs {
  display: none;
 
  @include display_pc {
    display: block !important;
  }
}

</style>