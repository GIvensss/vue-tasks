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

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>

    <sidebar v-model="isMenuOpened" />
  </div>
</template>

<script>

import Sidebar from '@/components/Sidebar';

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
  methods: {
    openMenu() {
      this.isMenuOpened = true;
    },
  },
};
</script>

<style scoped>

</style>
