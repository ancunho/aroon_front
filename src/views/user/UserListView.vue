<script setup>
import { ref } from 'vue'
import { AgGridVue } from 'ag-grid-vue3'
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'

ModuleRegistry.registerModules([AllCommunityModule])

const columnDefs = ref([
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'name', headerName: '이름', width: 120 },
  { field: 'email', headerName: '이메일', flex: 1 },
  { field: 'role', headerName: '역할', width: 100 },
  {
    field: 'status',
    headerName: '상태',
    width: 100,
    cellStyle: (params) => {
      if (params.value === '활성') return { color: '#15803d' }
      return { color: '#6b7280' }
    },
  },
  { field: 'createdAt', headerName: '등록일', width: 130 },
])

const defaultColDef = ref({
  sortable: true,
  filter: true,
  resizable: true,
})

const rowData = ref([
  { id: 1, name: '홍길동', email: 'hong@aroon.com', role: '관리자', status: '활성', createdAt: '2025-12-01' },
  { id: 2, name: '김철수', email: 'kim@aroon.com', role: '사용자', status: '활성', createdAt: '2025-12-15' },
  { id: 3, name: '이영희', email: 'lee@aroon.com', role: '사용자', status: '비활성', createdAt: '2026-01-03' },
  { id: 4, name: '박민수', email: 'park@aroon.com', role: '사용자', status: '활성', createdAt: '2026-01-10' },
  { id: 5, name: '정수진', email: 'jung@aroon.com', role: '관리자', status: '활성', createdAt: '2026-01-20' },
  { id: 6, name: '최동훈', email: 'choi@aroon.com', role: '사용자', status: '비활성', createdAt: '2026-02-01' },
  { id: 7, name: '강미래', email: 'kang@aroon.com', role: '사용자', status: '활성', createdAt: '2026-02-05' },
  { id: 8, name: '윤서준', email: 'yoon@aroon.com', role: '사용자', status: '활성', createdAt: '2026-02-10' },
  { id: 9, name: '임하나', email: 'lim@aroon.com', role: '사용자', status: '활성', createdAt: '2026-02-12' },
  { id: 10, name: '한지우', email: 'han@aroon.com', role: '사용자', status: '비활성', createdAt: '2026-02-14' },
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
      <AgGridVue
        style="width: 100%; height: 500px;"
        :columnDefs="columnDefs"
        :rowData="rowData"
        :defaultColDef="defaultColDef"
        rowSelection="single"
        :pagination="true"
        :paginationPageSize="20"
      />
    </div>
  </div>
</template>
