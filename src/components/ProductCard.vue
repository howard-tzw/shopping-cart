<template>
  <div class="card bordered">
    <figure class="px-8 pt-10">
      <img :src="course.picture" alt="Card Image" class="object-contain w-full h-64" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        <router-link class="link link-hover" :to="`/course/${course.id}`">{{ course.title }}</router-link>
      </h2>
      <p>{{ toCurrency(Number(course.price)) }}</p>
      <div class="justify-end card-actions">
        <button class="btn btn-primary" @click="cartStore.add(course.id)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '../store/cart'
import type { Course } from '../store/courses'
import { toCurrency } from '../utils'

const cartStore = useCartStore()

defineProps<{
  course: Course
}>()
</script>
