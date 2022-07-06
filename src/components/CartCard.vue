<template>
  <div class="flex justify-between items-center border">
    <div class="flex items-center">
      <img :src="course.picture" alt="Card Image" class="object-cover w-20 h-20" />
      <div class="flex flex-col p-2">
        <span class="text-sm md:text-md font-medium">{{ course.title }}</span>
      </div>
    </div>

    <div class="flex justify-center items-center">
      <div class="pr-8 flex"></div>

      <div class="pr-8">
        <span class="text-xs font-medium"> {{ toCurrency(Number(course.price)) }}</span>
      </div>
      <div>
        <i class="fa fa-close text-xs font-medium"></i>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Course } from '@/store/courses'
import { toCurrency } from '@/utils'

defineProps<{
  course: Course
}>()
</script>
