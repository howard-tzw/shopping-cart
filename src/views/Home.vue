<template>
  <div class="p-4 max-w-7xl mx-auto">
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <ProductCardSkeleton v-show="!courseStore.loaded" v-for="n in 15" :key="n" />
      <ProductCard v-for="course in courses" :key="course.id" :course="course" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import ProductCardSkeleton from '../components/ProductCardSkeleton.vue'
import { useCourseStore } from '../store/courses'

const courseStore = useCourseStore()

const courses = computed(() => courseStore.list)
</script>
