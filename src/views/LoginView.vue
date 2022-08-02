<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex
        xs12
        sm8
        md4 >
        <login-form />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LoginForm from '@/components/LoginForm';

export default {
  name: 'LoginView',
  components: {
    LoginForm,
  },
};
</script>

<style scoped>

</style>
