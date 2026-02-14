<script setup>
import { ref } from 'vue'

const settings = ref({
  siteName: 'Aroon',
  language: 'ko',
  darkMode: false,
})
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold text-gray-800 mb-6">환경 설정</h1>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 max-w-lg">
      <div class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">사이트명</label>
          <input
            v-model="settings.siteName"
            type="text"
            class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">언어</label>
          <select
            v-model="settings.language"
            class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="ko">한국어</option>
            <option value="en">English</option>
          </select>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm font-medium text-gray-700">다크 모드</span>
          <button
            @click="settings.darkMode = !settings.darkMode"
            :class="settings.darkMode ? 'bg-blue-600' : 'bg-gray-300'"
            class="relative w-11 h-6 rounded-full transition-colors cursor-pointer"
          >
            <span
              :class="settings.darkMode ? 'translate-x-5' : 'translate-x-0.5'"
              class="absolute top-0.5 left-0 w-5 h-5 bg-white rounded-full shadow transition-transform"
            />
          </button>
        </div>
        <div class="pt-2">
          <button class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-lg transition-colors text-sm cursor-pointer">
            저장
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
