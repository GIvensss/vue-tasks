import fetchApi from '@/config/api';

export default {
  namespaced: true,
  state: {
    userData: {},
    error: '',
    isLoading: false,
  },
  actions: {
    async getUserInfo({ commit }, userId) {
      commit('setLoadingStatus', { isLoading: true });
      const response = await fetchApi(`/user-info/${userId}`, 'GET');

      if (response.status === 'ok') {
        commit('setUserInfo', { userData: response.data });
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
    setUserInfo(state, { userData }) {
      state.userData = userData;
    },
    setErrorMessage(state, { errorMessage }) {
      state.error = errorMessage;
    },
    setLoadingStatus(state, { isLoading }) {
      state.isLoading = isLoading;
    },
  },
  getters: {
    mappedSocialNetworks(state) {
      return state.userData.social?.reduce((result, socialNetwork) => (socialNetwork.label === 'web'
        ? [socialNetwork, ...result]
        : [...result, socialNetwork]), []);
    },
    getErrorMessage(state) {
      return state.error.split('_').join(' ');
    },
  },
};
