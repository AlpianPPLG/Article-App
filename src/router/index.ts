import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/home',
      },
      {
        path: 'home',
        component: () => import('@/views/Tab1Page.vue'),
      },
      {
        path: 'radio',
        component: () => import('@/views/Tab2Page.vue'),
      },
      {
        path: 'library',
        component: () => import('@/views/Tab3Page.vue'),
      },
      {
        path: 'tab4',
        component: () => import('@/views/Tab4Page.vue'),
      },
    ],
  },
];

const router = createRouter({
  // Use: createWebHistory(process.env.BASE_URL) in your app
  history: createWebHistory(),
  routes,
});

export default router;