<template>
  <v-layout justify-center column align-center>
    <loader v-if="isLoading"/>
    <template v-else>
      <news-list :news="news"/>
    </template>
  </v-layout>
</template>

<script>
import NewsList from '@/components/blocks/NewsList';
import { mapActions, mapState } from 'vuex';
import Loader from '@/components/base/Loader';

export default {
  name: 'NewsPage',
  components: { NewsList, Loader },
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
