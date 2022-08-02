import fetchApi from '@/config/api';

export default {
  namespaced: true,
  state: {
    userId: null,
    error: '',
    isLoading: false,
  },
  actions: {
    async checkUser({ commit }, data) {
      commit('setLoadingStatus', { isLoading: true });
      const response = await fetchApi('/validate', 'POST', data);

      if (response.status === 'ok') {
        commit('login', { userId: response.data.id });
        commit('setErrorMessage', { errorMessage: '' });
        commit('setLoadingStatus', { isLoading: false });

        return true;
      }

      commit('setErrorMessage', { errorMessage: response.message });
      commit('setLoadingStatus', { isLoading: false });

      return false;
    },
  },
  mutations: {
    login(state, { userId }) {
      state.userId = userId;
    },
    logout(state) {
      state.userId = null;
    },
    setErrorMessage(state, { errorMessage }) {
      state.error = errorMessage;
    },
    setLoadingStatus(state, { isLoading }) {
      state.isLoading = isLoading;
    },
  },
  getters: {
    getErrorMessage(state) {
      return state.error.split('_').join(' ');
    },
  },
};
