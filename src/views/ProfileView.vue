<template>
  <v-layout app align-center justify-center mt-6>
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
              <router-link :to="social.link" :key="social.label">
                <v-list-item>
                  <v-list-item-content>
                    <v-icon> {{ `mdi-${social.icon}` }} </v-icon>
                  </v-list-item-content>
                </v-list-item>
              </router-link>
            </template>
          </v-row>
        </v-list>
      </v-card>
      </v-flex>
  </v-layout>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'Home',
  mounted() {
    this.getUserInfo(this.$route.params.id);
  },
  computed: {
    languages() {
      return this.userData.languages?.join(', ');
    },
    socialNetworks() {
      return this.mappedSocialNetworks.map((social) => {
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
