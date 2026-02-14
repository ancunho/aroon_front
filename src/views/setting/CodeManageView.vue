<script setup>
import { ref } from 'vue'

const codes = ref([
  { id: 1, group: 'ROLE', code: 'ADMIN', name: '관리자' },
  { id: 2, group: 'ROLE', code: 'USER', name: '사용자' },
  { id: 3, group: 'STATUS', code: 'ACTIVE', name: '활성' },
  { id: 4, group: 'STATUS', code: 'INACTIVE', name: '비활성' },
])
</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold text-gray-800">코드 관리</h1>
      <button class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm cursor-pointer">
        + 코드 추가
      </button>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <table class="w-full">
        <thead class="bg-gray-50 border-b border-gray-200">
          <tr>
            <th class="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">ID</th>
            <th class="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">그룹</th>
            <th class="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">코드</th>
            <th class="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">코드명</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr v-for="code in codes" :key="code.id" class="hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 text-sm text-gray-600">{{ code.id }}</td>
            <td class="px-6 py-4">
              <span class="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                {{ code.group }}
              </span>
            </td>
            <td class="px-6 py-4 text-sm font-mono text-gray-800">{{ code.code }}</td>
            <td class="px-6 py-4 text-sm text-gray-600">{{ code.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
