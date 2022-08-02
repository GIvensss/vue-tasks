<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4 >
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Sign in</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
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
              v-if="getErrorMessage"
              border="top"
              color="red lighten-2"
              dark
            >
              {{ getErrorMessage }}
            </v-alert>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="onSubmit" color="primary" >Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    ...mapState('loginPage', [
      'error',
      'userId',
    ]),
    ...mapGetters('loginPage', [
      'getErrorMessage',
    ]),
  },
  methods: {
    async onSubmit() {
      const result = await this.checkUser({ email: this.email, password: this.password });

      if (result) {
        await this.$router.push({ path: `/profile/${this.userId}` });
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
