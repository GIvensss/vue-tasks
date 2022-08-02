<template>
  <div>
    <v-toolbar
      dark
      prominent
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon @click="openMenu"></v-app-bar-nav-icon>

      <v-toolbar-title>Task 1</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        @click="onIconClick"
        icon>
        <v-icon>{{ `mdi-${icon}` }}</v-icon>
      </v-btn>
    </v-toolbar>

    <sidebar v-model="isMenuOpened" />
  </div>
</template>

<script>

import Sidebar from '@/components/Sidebar';
import { mapMutations, mapState } from 'vuex';
import { LOGIN_PAGE } from '@/config/constants';

export default {
  name: 'Header',
  components: {
    Sidebar,
  },
  data() {
    return {
      isMenuOpened: false,
    };
  },
  computed: {
    icon() {
      return this.userId
        ? 'logout'
        : 'login';
    },
    ...mapState('loginPage', [
      'userId',
    ]),
  },
  methods: {
    onIconClick() {
      if (this.icon === 'logout') {
        this[this.icon]();
      }

      this.$router.push({ path: LOGIN_PAGE });
    },
    openMenu() {
      this.isMenuOpened = true;
    },
    ...mapMutations('loginPage', [
      'logout',
      'login',
    ]),
  },
};
</script>

<style scoped>

</style>
