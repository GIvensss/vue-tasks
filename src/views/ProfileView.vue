<template>
  <v-layout app align-center justify-center mt-6>
    <loader v-if="isLoading" />
    <template v-else-if="getErrorMessage">
      <v-alert
        v-if="getErrorMessage"
        border="top"
        color="red lighten-2"
        dark
      >
        {{ getErrorMessage }}
      </v-alert>
    </template>
    <template v-else>
      <profile-info-list :user-data="userData" />
    </template>
  </v-layout>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import Loader from '@/components/base/Loader';
import ProfileInfoList from '@/components/blocks/ProfileInfoList';

export default {
  name: 'Home',
  components: {
    ProfileInfoList,
    Loader,
  },
  mounted() {
    if (this.$route.params.id) {
      this.getUserInfo(this.$route.params.id);
    } else {
      this.getUserInfo(this.userId);
    }
  },
  computed: {
    ...mapState('profilePage', [
      'userData',
      'isLoading',
    ]),
    ...mapState('loginPage', [
      'userId',
    ]),
    ...mapGetters('profilePage', [
      'mappedSocialNetworks',
      'getErrorMessage',
    ]),
  },
  methods: {
    ...mapActions('profilePage', [
      'getUserInfo',
    ]),
  },
};
</script>
