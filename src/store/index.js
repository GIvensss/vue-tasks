import Vue from 'vue';
import Vuex from 'vuex';
import loginPage from '@/store/modules/loginPage';
import profilePage from '@/store/modules/profilePage';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    loginPage,
    profilePage,
  },
});
