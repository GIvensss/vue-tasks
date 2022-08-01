<template>
  <div>
    <v-toolbar
      dark
      prominent
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon @click="isMenuOpened = !isMenuOpened"></v-app-bar-nav-icon>

      <v-toolbar-title>Task 1</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer
      v-model="isMenuOpened"
      app
      temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h3">
            Task 1
          </v-list-item-title>
          <v-list-item-subtitle>
            Navigate within the app
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <template v-for="item in items" >
          <router-link :to="item.redirectsTo" :key="item.title">
          <v-list-item
            link
          >
            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          </router-link>
        </template>

      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { LOGIN_PAGE, NEWS_PAGE, PROFILE_PAGE } from '@/config/constants';

export default {
  name: 'Header',
  data() {
    return {
      items: [
        { title: 'Login', redirectsTo: LOGIN_PAGE },
        { title: 'Profile', redirectsTo: PROFILE_PAGE },
        { title: 'News', redirectsTo: NEWS_PAGE },
      ],
      isMenuOpened: true,
    };
  },
};
</script>

<style scoped>

</style>
