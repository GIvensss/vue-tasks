<template>
  <v-flex>
    <v-card >
      <v-card-title>
        City: {{ userData.city }}
      </v-card-title>
    </v-card>
    <v-card class="my-4">
      <v-card-title>
        Languages: {{ languages }}
      </v-card-title>
    </v-card>
    <v-card>
      <v-list
        dense
        nav
      >
            <v-list-item
              v-for="social in socialNetworks"
              :href="social.link"
              :key="social.label"
              class="d-inline-flex"
              target="_blank">
              <v-list-item-content>
                <v-icon> {{ `mdi-${social.icon}` }} </v-icon>
              </v-list-item-content>
            </v-list-item>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'ProfileInfoList',
  props: {
    userData: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    languages() {
      return this.userData.languages?.join(', ');
    },
    socialNetworks() {
      return this.userData.social?.map((social) => {
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
  },

};
</script>

<style scoped>

</style>
