import fetchApi from '@/config/api';

export default {
  namespaced: true,
  state: {
    news: [],
  },
  actions: {
    async getNews({ commit }) {
      commit('setLoadingStatus', { isLoading: true }, { root: true });
      const response = await fetchApi('/news', 'GET');

      if (response.status === 'ok') {
        commit('setNews', { news: response.data });
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
    setNews(state, { news }) {
      state.news = news;
    },
  },
};
