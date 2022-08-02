import Vue from 'vue';
import VueRouter from 'vue-router';
import ProfileView from '@/views/ProfileView';
import store from '@/store';
import { LOGIN_PAGE, NEWS_PAGE, PROFILE_PAGE } from '@/config/constants';

Vue.use(VueRouter);

const routes = [
  {
    path: `${PROFILE_PAGE}/:id?`,
    name: 'Profile',
    component: ProfileView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: LOGIN_PAGE,
    name: 'Login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: NEWS_PAGE,
    name: 'News',
    component: () => import('../views/NewsView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.state.loginPage.userId) {
      next('/login');
    }
  }
  if (to.fullPath === LOGIN_PAGE) {
    if (store.state.loginPage.userId) {
      next('/profile');
    }
  }
  next();
});

export default router;
