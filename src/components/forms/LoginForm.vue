<template>
  <v-card
    class="elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>
        Sign in
      </v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <loader v-if="isLoading" />
      <v-form v-else>
        <v-text-field
          v-model="email"
          id="email"
          name="email"
          label="Email"
          type="email"
        ></v-text-field>
        <v-text-field
          v-model="password"
          id="password"
          name="password"
          label="Password"
          type="password"
        ></v-text-field>
      </v-form>
      <v-alert
        v-if="getErrorMessage || validationError"
        border="top"
        color="red lighten-2"
        dark
      >
        {{ getErrorMessage || validationError }}
      </v-alert>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        @click="onSubmit"
        :disabled="isLoading"
        color="primary">
        Login
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import { PROFILE_PAGE } from '@/config/constants';
import Loader from '@/components/base/Loader';

export default {
  name: 'LoginForm',
  components: {
    Loader,
  },
  data() {
    return {
      email: '',
      password: '',
      validationError: '',
    };
  },
  computed: {
    ...mapState(['error', 'isLoading']),
    ...mapGetters(['getErrorMessage']),
  },
  watch: {
    email(newValue) {
      if (!newValue.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )) {
        this.validationError = 'Email is not correct';
      } else {
        this.validationError = '';
      }
    },
    password(newValue) {
      if (newValue.length <= 2) {
        this.validationError = 'Password must longer than 2 characters';
      } else {
        this.validationError = '';
      }
    },
  },
  methods: {
    async onSubmit() {
      if (this.email && this.password) {
        const result = await this.checkUser({ email: this.email, password: this.password });

        if (result) {
          await this.$router.push({ path: PROFILE_PAGE });
        }
      } else {
        this.validationError = 'There should be no empty values here';
      }
    },
    ...mapActions('loginPage', [
      'checkUser',
    ]),
  },
};
</script>

<style scoped>

</style>
