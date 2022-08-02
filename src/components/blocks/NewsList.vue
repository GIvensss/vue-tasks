<template>
  <v-flex>
    <v-card
      v-for="currentNews in news"
      :key="currentNews.id"
      elevation="6"
      class="mt-6"
      tile
    >
      <v-card-title>{{ currentNews.title }}</v-card-title>
      <v-card-text>{{ currentNews.text }}</v-card-text>
    </v-card>
  </v-flex>
</template>

<script>

export default {
  name: 'NewsList',
  props: {
    news: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>

</style>
