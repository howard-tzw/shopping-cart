<template>
  <div class="flex justify-between items-center border">
    <div class="flex items-center">
      <img :src="course.picture" alt="Card Image" class="object-cover w-20 h-20" />
      <div class="flex flex-col p-2">
        <span class="text-sm md:text-md font-medium">{{ course.title }}</span>
      </div>
    </div>

    <div class="flex justify-center items-center space-x-1">
      <div class="">
        <span class="text-xs font-medium"> {{ toCurrency(Number(course.price)) }}</span>
      </div>
      <div>
        <i class="fa fa-close text-xs font-medium"></i>
      </div>

      <div class="w-12">
        <button @click="cartStore.remove(course.id)" class="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded">
          刪除
        </button>
      </div>

      <div class="">
        <input v-model="selected" class="mr-2 leading-tight" type="checkbox" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store/cart'
import { Course } from '@/store/courses'
import { toCurrency } from '@/utils'
import { computed } from '@vue/reactivity'
import { ref, watch } from 'vue'

const props = defineProps<{
  course: Course
}>()

const cartStore = useCartStore()
const selected = ref(false)
const isSelected = computed(() => {
  return cartStore.selectedIds.includes(props.course.id)
})

watch(isSelected, () => {
  if (isSelected.value) {
    selected.value = true
  } else {
    selected.value = false
  }
})

watch(selected, () => {
  if (selected.value) {
    cartStore.select(props.course.id)
  } else {
    cartStore.deselect(props.course.id)
  }
})
</script>
