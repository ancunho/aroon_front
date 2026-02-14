import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'

const routes = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/HomeView.vue'),
      },
      {
        path: 'user',
        name: 'UserList',
        component: () => import('@/views/user/UserListView.vue'),
      },
      {
        path: 'user/create',
        name: 'UserCreate',
        component: () => import('@/views/user/UserCreateView.vue'),
      },
      {
        path: 'setting',
        name: 'Setting',
        component: () => import('@/views/setting/SettingView.vue'),
      },
      {
        path: 'setting/code',
        name: 'SettingCode',
        component: () => import('@/views/setting/CodeManageView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
