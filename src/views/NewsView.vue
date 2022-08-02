<template>
  <v-layout justify-center column align-center>
    <loader v-if="isLoading" />
    <template v-else>
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
    </template>
  </v-layout>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Loader from '@/components/Loader';

export default {
  name: 'NewsPage',
  components: { Loader },
  mounted() {
    this.getNews();
  },
  computed: {
    ...mapState('newsPage', [
      'news',
      'isLoading',
    ]),
  },
  methods: {
    ...mapActions('newsPage', [
      'getNews',
    ]),
  },
};
</script>

<style scoped>

</style>
