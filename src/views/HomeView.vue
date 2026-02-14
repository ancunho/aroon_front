<script setup>
import { ref } from 'vue'
import api from '@/api'
import AppDialog from '@/components/AppDialog.vue'
import AppAlert from '@/components/AppAlert.vue'

const apiStatus = ref('')

async function checkApi() {
  try {
    apiStatus.value = 'Connecting...'
    const res = await api.get('/api/users')
    apiStatus.value = `Connected: ${JSON.stringify(res.data)}`
  } catch (e) {
    apiStatus.value = `Server not available (${e.message})`
  }
}

// Dialog 테스트
const dialogOpen = ref(false)

// Alert 테스트
const alertShow = ref(false)
const alertType = ref('success')
const alertMessage = ref('')

function showAlert(type) {
  const messages = {
    success: '저장이 완료되었습니다.',
    warn: '입력값을 확인해주세요.',
    fail: '서버 오류가 발생했습니다.',
  }
  alertType.value = type
  alertMessage.value = messages[type]
  alertShow.value = false
  setTimeout(() => { alertShow.value = true }, 50)
}
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <p class="text-sm text-gray-500 mb-1">총 사용자</p>
        <p class="text-3xl font-bold text-gray-800">128</p>
      </div>
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <p class="text-sm text-gray-500 mb-1">활성 사용자</p>
        <p class="text-3xl font-bold text-blue-600">96</p>
      </div>
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <p class="text-sm text-gray-500 mb-1">신규 가입 (오늘)</p>
        <p class="text-3xl font-bold text-green-600">5</p>
      </div>
    </div>

    <!-- 컴포넌트 테스트 -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
      <h2 class="text-lg font-semibold text-gray-800 mb-4">컴포넌트 테스트</h2>
      <div class="flex flex-wrap gap-3">
        <button
          @click="dialogOpen = true"
          class="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-5 rounded-lg transition-colors cursor-pointer"
        >
          Dialog 열기
        </button>
        <button
          @click="showAlert('success')"
          class="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-5 rounded-lg transition-colors cursor-pointer"
        >
          Alert (Success)
        </button>
        <button
          @click="showAlert('warn')"
          class="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-5 rounded-lg transition-colors cursor-pointer"
        >
          Alert (Warn)
        </button>
        <button
          @click="showAlert('fail')"
          class="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-5 rounded-lg transition-colors cursor-pointer"
        >
          Alert (Fail)
        </button>
      </div>
    </div>

    <!-- API 테스트 -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 class="text-lg font-semibold text-gray-800 mb-4">API 연결 테스트</h2>
      <button
        @click="checkApi"
        class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-lg transition-colors cursor-pointer"
      >
        API 연결 확인
      </button>
      <p v-if="apiStatus" class="mt-3 text-sm text-gray-600">{{ apiStatus }}</p>
    </div>

    <!-- Dialog 컴포넌트 -->
    <AppDialog :show="dialogOpen" width="max-w-4xl" title="테스트 다이얼로그" @close="dialogOpen = false">
      <p class="text-sm text-gray-600">
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>
        이 다이얼로그는 우측 상단의 X 버튼으로만 닫을 수 있습니다.
        배경(백드롭)을 클릭해도 닫히지 않습니다.<br><br><br><br>

      </p>
      <template #footer>
        <div class="flex justify-end gap-3">
          <button
            @click="dialogOpen = false"
            class="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors text-sm cursor-pointer"
          >
            취소
          </button>
          <button
            @click="dialogOpen = false; showAlert('success')"
            class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm cursor-pointer"
          >
            확인
          </button>
        </div>
      </template>
    </AppDialog>

    <!-- Alert 컴포넌트 -->
    <AppAlert :show="alertShow" :type="alertType" :message="alertMessage" @close="alertShow = false" />
  </div>
</template>
