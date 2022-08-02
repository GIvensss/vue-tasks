<template>
  <v-layout app align-center justify-center mt-6>
    <loader v-if="isLoading" />
    <template v-else>
      <v-alert
        v-if="getErrorMessage"
        border="top"
        color="red lighten-2"
        dark
      >
        {{ getErrorMessage }}
      </v-alert>
      <v-flex v-else>
        <v-card >
          City: {{ userData.city }}
        </v-card>
        <v-card class="my-4">
          Languages: {{ languages }}
        </v-card>
        <v-card>
          <v-list
            dense
            nav
          >
            <v-row>
              <template v-for="social in socialNetworks" >
                <v-list-item :href="social.link" :key="social.label" target="_blank">
                  <v-list-item-content>
                    <v-icon> {{ `mdi-${social.icon}` }} </v-icon>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-row>
          </v-list>
        </v-card>
      </v-flex>
    </template>
  </v-layout>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import Loader from '@/components/Loader';

export default {
  name: 'Home',
  components: {
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
    languages() {
      return this.userData.languages?.join(', ');
    },
    socialNetworks() {
      return this.mappedSocialNetworks?.map((social) => {
        if (social.label === 'vk') {
          return {
            ...social,
            icon: 'pig',
          };
        }
        if (social.label === 'telegram') {
          return {
            ...social,
            icon: 'airplane',
          };
        }
        return {
          ...social,
          icon: social.label,
        };
      });
    },
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
