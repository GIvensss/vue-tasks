import fetchApi from '@/config/api';

export default {
  namespaced: true,
  state: {
    userId: null,
  },
  actions: {
    async checkUser({ commit }, data) {
      commit('setLoadingStatus', { isLoading: true }, { root: true });
      const response = await fetchApi('/validate', 'POST', data);

      if (response.status === 'ok') {
        commit('login', { userId: response.data.id });
        commit('setErrorMessage', { errorMessage: '' }, { root: true });
        commit('setLoadingStatus', { isLoading: false }, { root: true });

        return true;
      }

      commit('setErrorMessage', { errorMessage: response.message }, { root: true });
      commit('setLoadingStatus', { isLoading: false }, { root: true });

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
  },
  getters: {

  },
};
