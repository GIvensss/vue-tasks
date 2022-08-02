import Vue from 'vue';
import VueRouter from 'vue-router';
import ProfileView from '@/views/ProfileView';

Vue.use(VueRouter);

const routes = [
  {
    path: '/profile/:id',
    name: 'Profile',
    component: ProfileView,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
