import fetchApi from '@/config/api';

export default {
  namespaced: true,
  state: {
    userData: {},
  },
  actions: {
    async getUserInfo({ commit }, userId) {
      commit('setLoadingStatus', { isLoading: true }, { root: true });
      const response = await fetchApi(`/user-info/${userId}`, 'GET');

      if (response.status === 'ok') {
        const userData = response.data;

        userData.social = userData.social?.reduce((result, socialNetwork) => (socialNetwork.label === 'web'
          ? [socialNetwork, ...result]
          : [...result, socialNetwork]), []);

        commit('setUserInfo', { userData });
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
    setUserInfo(state, { userData }) {
      state.userData = userData;
    },
  },
};
