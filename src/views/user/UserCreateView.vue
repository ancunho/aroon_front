
<template>
  <div>
    <h1 class="text-2xl font-bold text-gray-800 mb-6">사용자 등록</h1>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 max-w-lg">
      <form @submit.prevent="handleSubmit" class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">이름</label>
          <input
            v-model="form.name"
            type="text"
            class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="이름을 입력하세요"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">이메일</label>
          <input
            v-model="form.email"
            type="email"
            class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="이메일을 입력하세요"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">역할</label>
          <select
            v-model="form.role"
            class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option>관리자</option>
            <option>사용자</option>
          </select>
        </div>
        <div class="flex gap-3 pt-2">
          <button
            type="submit"
            class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-lg transition-colors text-sm cursor-pointer"
          >
            등록
          </button>
          <router-link
            to="/user"
            class="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-5 rounded-lg transition-colors text-sm"
          >
            취소
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref({
  name: '',
  email: '',
  role: '사용자',
})

function handleSubmit() {
  // TODO: API 연동
  console.log('submit', form.value)
  router.push('/user')
}
</script>
