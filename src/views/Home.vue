<template>
  <div class="py-5 px-5 sm:px-12 md:px-24 max-w-7xl mx-auto">
    <div class="grid gap-4 place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <CourseCardSkeleton v-show="!courseStore.loaded" v-for="n in 15" :key="n" />
      <CourseCard v-for="course in courses" :key="course.id" :course="course" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import CourseCard from '@/components/CourseCard.vue'
import CourseCardSkeleton from '@/components/CourseCardSkeleton.vue'
import { useCourseStore } from '@/store/courses'

const courseStore = useCourseStore()
courseStore.fetchAll()

const courses = computed(() => courseStore.list)
</script>
