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

    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMenuOpened: true,
    };
  },
};
</script>

<style scoped>

</style>
