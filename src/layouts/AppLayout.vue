<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const menuItems = [
  {
    name: '사용자 관리',
    path: '/user',
    children: [
      { name: '사용자 목록', path: '/user' },
      { name: '사용자 등록', path: '/user/create' },
    ],
  },
  {
    name: '시스템',
    path: '/setting',
    children: [
      { name: '환경 설정', path: '/setting' },
      { name: '코드 관리', path: '/setting/code' },
    ],
  },
]

const sidebarOpen = ref(true)
const megaMenuOpen = ref(false)
let closeTimer = null

function openMegaMenu() {
  clearTimeout(closeTimer)
  megaMenuOpen.value = true
}

function closeMegaMenu() {
  clearTimeout(closeTimer)
  closeTimer = setTimeout(() => {
    megaMenuOpen.value = false
  }, 250)
}

const profileOpen = ref(false)
const profileRef = ref(null)

function toggleProfile() {
  profileOpen.value = !profileOpen.value
}

function handleClickOutside(e) {
  if (profileRef.value && !profileRef.value.contains(e.target)) {
    profileOpen.value = false
  }
}

function handleLogout() {
  profileOpen.value = false
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
  router.push('/login')
}

function goToSetting() {
  profileOpen.value = false
  router.push('/setting')
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-gray-50 sticky top-0 z-50 border-b border-gray-200 shadow-xs">
      <div class="px-6">
        <div class="flex h-[64px] items-center">
          <!-- Logo -->
          <router-link to="/" class="flex items-center gap-2 shrink-0">
            <div class="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">O</span>
            </div>
            <span class="text-md font-bold text-[#344054]">ArO_On Mgmt System</span>
          </router-link>

          <!-- Main Navigation (중앙 배치) -->
          <nav class="hidden md:flex items-center justify-center h-[64px] flex-1">
            <div
              v-for="menu in menuItems"
              :key="menu.name"
              class="w-40 h-full"
              @mouseenter="openMegaMenu"
              @mouseleave="closeMegaMenu"
            >
              <router-link
                :to="menu.path"
                class="h-full flex items-center justify-center text-sm font-bold text-[#7D8898] hover:text-[#1D2939] transition-colors"
              >
                {{ menu.name }}
              </router-link>
            </div>
          </nav>

          <!-- Mega Menu (전체 2depth 펼침) -->
            <Transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 -translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-200"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-1"
            >
              <div
                v-if="megaMenuOpen"
                class="absolute left-0 right-0 top-[64px] bg-white border-b border-gray-200 shadow-md"
                @mouseenter="openMegaMenu"
                @mouseleave="closeMegaMenu"
              >
                <div class="flex justify-center py-5">
                  <div
                    v-for="menu in menuItems"
                    :key="menu.name"
                    class="w-40"
                  >
                    <ul class="space-y-1">
                      <li v-for="child in menu.children" :key="child.path">
                        <router-link
                          :to="child.path"
                          class="block px-3 py-1.5 text-sm text-[#7D8898] hover:text-[#1D2939] rounded-md transition-colors text-center"
                          @click="megaMenuOpen = false"
                        >
                          {{ child.name }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Transition>

          <!-- Profile -->
          <div ref="profileRef" class="relative">
            <button
              @click="toggleProfile"
              class="flex items-center justify-center w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors cursor-pointer"
            >
              <svg class="w-5 h-5 text-[#667085]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

            <!-- Profile Dropdown -->
            <Transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <div
                v-if="profileOpen"
                class="absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg py-1 z-50"
              >
                <div class="px-4 py-2 border-b border-gray-100">
                  <p class="text-sm font-medium text-gray-800">관리자</p>
                  <p class="text-xs text-gray-500">admin@aroon.com</p>
                </div>
                <button
                  @click="goToSetting"
                  class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer flex items-center gap-2"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  설정
                </button>
                <button
                  @click="handleLogout"
                  class="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors cursor-pointer flex items-center gap-2"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  로그아웃
                </button>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </header>

    <!-- Body: Sidebar + Main -->
    <div class="flex min-h-[calc(100vh-64px)]">
      <!-- Sidebar -->
      <aside
        :class="sidebarOpen ? 'w-64' : 'w-0'"
        class="shrink-0 bg-gray-50 border-r border-gray-200 transition-all duration-300 overflow-hidden relative"
      >
        <!-- Toggle Button -->
        <button
          @click="sidebarOpen = !sidebarOpen"
          class="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded hover:bg-gray-200 transition-colors cursor-pointer text-gray-400 hover:text-gray-600"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div class="w-64 py-4 space-y-4 pt-10">
          <div v-for="menu in menuItems" :key="menu.name">
            <p class="px-5 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              {{ menu.name }}
            </p>
            <ul class="mt-1">
              <li v-for="child in menu.children" :key="child.path">
                <router-link
                  :to="child.path"
                  :class="route.path === child.path
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'"
                  class="block px-5 py-2.5 text-sm font-medium transition-colors"
                >
                  {{ child.name }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      <!-- Sidebar Open Button (닫혀있을 때) -->
      <button
        v-if="!sidebarOpen"
        @click="sidebarOpen = true"
        class="absolute left-0 top-[76px] w-6 h-10 bg-gray-50 border border-l-0 border-gray-200 rounded-r flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer text-gray-400 hover:text-gray-600 z-10"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Main Content -->
      <main class="flex-1 p-8">
        <router-view />
      </main>
    </div>
  </div>
</template>
