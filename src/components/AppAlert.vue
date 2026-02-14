<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'success',
    validator: (v) => ['success', 'warn', 'fail'].includes(v),
  },
  message: {
    type: String,
    default: '',
  },
  show: {
    type: Boolean,
    default: false,
  },
  duration: {
    type: Number,
    default: 3000,
  },
})

const emit = defineEmits(['close'])

const visible = ref(false)
let timer = null

watch(
  () => props.show,
  (val) => {
    if (val) {
      visible.value = true
      clearTimeout(timer)
      timer = setTimeout(() => {
        visible.value = false
        emit('close')
      }, props.duration)
    } else {
      visible.value = false
    }
  }
)

const config = {
  success: {
    bg: 'bg-green-50 border-green-200',
    icon: 'text-green-500',
    text: 'text-green-800',
    iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  warn: {
    bg: 'bg-yellow-50 border-yellow-200',
    icon: 'text-yellow-500',
    text: 'text-yellow-800',
    iconPath: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z',
  },
  fail: {
    bg: 'bg-red-50 border-red-200',
    icon: 'text-red-500',
    text: 'text-red-800',
    iconPath: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
}
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition ease-out duration-300 transform"
      enter-from-class="translate-x-full opacity-0"
      enter-to-class="translate-x-0 opacity-100"
      leave-active-class="transition ease-in duration-200 transform"
      leave-from-class="translate-x-0 opacity-100"
      leave-to-class="translate-x-full opacity-0"
    >
      <div
        v-if="visible"
        :class="config[type].bg"
        class="fixed top-5 right-5 z-[200] min-w-[320px] max-w-sm border rounded-lg shadow-lg p-4 flex items-start gap-3"
      >
        <svg
          :class="config[type].icon"
          class="w-5 h-5 mt-0.5 shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="config[type].iconPath" />
        </svg>
        <p :class="config[type].text" class="text-sm font-medium flex-1">
          {{ message }}
        </p>
        <button
          @click="visible = false; emit('close')"
          :class="config[type].text"
          class="shrink-0 hover:opacity-70 cursor-pointer"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </Transition>
  </Teleport>
</template>
