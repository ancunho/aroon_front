import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginView.vue'),
  },
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '', name: 'Home', component: () => import('@/views/HomeView.vue'),
      },
      {
        path: 'user', name: 'UserList', component: () => import('@/views/user/UserListView.vue'),
      },
      {
        path: 'user/create', name: 'UserCreate', component: () => import('@/views/user/UserCreateView.vue'),
      },
      {
        path: 'setting', name: 'Setting', component: () => import('@/views/setting/SettingView.vue'),
      },
      {
        path: 'setting/code', name: 'SettingCode', component: () => import('@/views/setting/CodeManageView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  const token = localStorage.getItem('accessToken')

  if (to.name === 'Login' && token) {
    return '/'
  }

  if (to.name !== 'Login' && !token) {
    return '/login'
  }
})

export default router
