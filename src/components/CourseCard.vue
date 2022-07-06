<template>
  <div class="max-w-sm h-full rounded overflow-hidden shadow-lg">
    <img :src="course.picture" class="object-cover w-full h-56" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">
        {{ course.title }}
      </div>
      <p class="text-gray-700 text-base">開課狀態：{{ course.status }}</p>
      <div class="flex justify-between">
        <div class="pt-4 pb-2">價格：{{ toCurrency(Number(course.price)) }}</div>
        <button
          class="text-white text-sm py-1 px-2 rounded"
          :class="isAdded ? 'bg-gray-500 cursor-default' : 'bg-blue-500 hover:bg-blue-700 '"
          @click="cartStore.add(course.id)"
        >
          {{ isAdded ? '已加入' : '加入購物車' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store/cart'
import type { Course } from '@/store/courses'
import { toCurrency } from '@/utils'
import { computed } from '@vue/reactivity'

const props = defineProps<{
  course: Course
}>()

const cartStore = useCartStore()
const isAdded = computed(() => cartStore.items[props.course.id])
</script>
