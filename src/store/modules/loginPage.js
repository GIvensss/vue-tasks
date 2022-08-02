import fetchApi from '@/config/api';

export default {
  namespaced: true,
  state: {
    userId: '',
    error: '',
  },
  actions: {
    async checkUser({ commit }, data) {
      const response = await fetchApi('/validate', 'POST', data);

      if (response.status === 'ok') {
        commit('login', { userId: response.data.id });
        commit('setErrorMessage', { errorMessage: '' });

        return true;
      }

      commit('setErrorMessage', { errorMessage: response.message });

      return false;
    },
  },
  mutations: {
    login(state, { userId }) {
      state.userId = userId;
    },
    setErrorMessage(state, { errorMessage }) {
      state.error = errorMessage;
    },
  },
  getters: {
    getErrorMessage(state) {
      return state.error.split('_').join(' ');
    },
  },
};
