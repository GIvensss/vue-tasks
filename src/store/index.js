import Vue from 'vue';
import Vuex from 'vuex';
import loginPage from '@/store/modules/loginPage';
import profilePage from '@/store/modules/profilePage';
import newsPage from '@/store/modules/newsPage';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    error: '',
  },
  getters: {
    getErrorMessage(state) {
      return state.error.split('_').join(' ');
    },
  },
  mutations: {
    setErrorMessage(state, { errorMessage }) {
      state.error = errorMessage;
    },
    setLoadingStatus(state, { isLoading }) {
      state.isLoading = isLoading;
    },
  },
  actions: {
  },
  modules: {
    loginPage,
    profilePage,
    newsPage,
  },
});
