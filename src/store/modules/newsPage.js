import fetchApi from '@/config/api';

export default {
  namespaced: true,
  state: {
    news: [],
    error: '',
    isLoading: false,
  },
  actions: {
    async getNews({ commit }) {
      commit('setLoadingStatus', { isLoading: true });
      const response = await fetchApi('/news', 'GET');

      if (response.status === 'ok') {
        commit('setNews', { news: response.data });
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
    setNews(state, { news }) {
      state.news = news;
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
