<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/api'

const router = useRouter()

const userId = ref('')
const password = ref('')
const errorMessage = ref('')
const loading = ref(false)

async function handleLogin() {
  if (!userId.value || !password.value) {
    errorMessage.value = '아이디와 비밀번호를 입력해주세요.'
    return
  }

  loading.value = true
  errorMessage.value = ''

  try {
    const res = await api.post('/api/auth/login', {
      userId: userId.value,
      password: password.value,
    });

    const { accessToken, refreshToken } = res.data.data;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    router.push('/');
  } catch (e) {
    if (e.response?.status === 401) {
      errorMessage.value = '아이디 또는 비밀번호가 올바르지 않습니다.'
    } else {
      errorMessage.value = '서버에 연결할 수 없습니다.'
    }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center px-4">
    <div class="w-full max-w-sm">
      <!-- Logo -->
      <div class="flex flex-col items-center mb-8">
        <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-3">
          <span class="text-white font-bold text-xl">O</span>
        </div>
        <h1 class="text-xl font-bold text-gray-800">ArO_On Mgmt System</h1>
      </div>

      <!-- Login Form -->
      <form @submit.prevent="handleLogin" class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-4">
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700 mb-1">아이디</label>
          <input
            id="userId"
            v-model="userId"
            type="text"
            placeholder="아이디를 입력하세요"
            class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">비밀번호</label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="비밀번호를 입력하세요"
            class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <p v-if="errorMessage" class="text-sm text-red-600">{{ errorMessage }}</p>

        <button
          type="submit"
          :disabled="loading"
          class="w-full py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ loading ? '로그인 중...' : '로그인' }}
        </button>
      </form>
    </div>
  </div>
</template>
