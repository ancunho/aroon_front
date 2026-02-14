<script setup>
import { ref } from 'vue'

const users = ref([
  { id: 1, name: '홍길동', email: 'hong@aroon.com', role: '관리자', status: '활성' },
  { id: 2, name: '김철수', email: 'kim@aroon.com', role: '사용자', status: '활성' },
  { id: 3, name: '이영희', email: 'lee@aroon.com', role: '사용자', status: '비활성' },
])
</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold text-gray-800">사용자 목록</h1>
      <router-link
        to="/user/create"
        class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
      >
        + 사용자 등록
      </router-link>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <table class="w-full">
        <thead class="bg-gray-50 border-b border-gray-200">
          <tr>
            <th class="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">ID</th>
            <th class="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">이름</th>
            <th class="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">이메일</th>
            <th class="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">역할</th>
            <th class="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">상태</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr v-for="user in users" :key="user.id" class="hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 text-sm text-gray-600">{{ user.id }}</td>
            <td class="px-6 py-4 text-sm font-medium text-gray-800">{{ user.name }}</td>
            <td class="px-6 py-4 text-sm text-gray-600">{{ user.email }}</td>
            <td class="px-6 py-4 text-sm text-gray-600">{{ user.role }}</td>
            <td class="px-6 py-4">
              <span
                :class="user.status === '활성'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gray-100 text-gray-600'"
                class="px-2 py-1 rounded-full text-xs font-medium"
              >
                {{ user.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
