<template>
  <v-flex>
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
