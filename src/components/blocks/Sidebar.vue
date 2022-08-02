<template>
  <v-navigation-drawer
    :value="value"
    @input="$emit('input', $event)"
    app
    temporary>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h3">
          Task 1
        </v-list-item-title>
        <v-list-item-subtitle>
          Navigate within the app
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list
      dense
      nav
    >
      <template v-for="item in filteredNavigationItems" >
        <router-link :to="item.redirectsTo" :key="item.title">
          <v-list-item
            link
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { LOGIN_PAGE, NEWS_PAGE, PROFILE_PAGE } from '@/config/constants';
import { mapState } from 'vuex';

export default {
  name: 'Sidebar',
  props: {
    value: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      navigationItems: [
        { title: 'Login', redirectsTo: LOGIN_PAGE },
        { title: 'Profile', redirectsTo: PROFILE_PAGE },
        { title: 'News', redirectsTo: NEWS_PAGE },
      ],
    };
  },
  computed: {
    filteredNavigationItems() {
      return this.userId
        ? this.navigationItems.filter(({ title }) => title !== 'Login')
        : this.navigationItems.filter(({ title }) => title !== 'Profile');
    },
    ...mapState('loginPage', [
      'userId',
    ]),
  },
  methods: {
  },
};
</script>

<style scoped>

</style>
